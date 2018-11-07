from starlette.applications import Starlette
from starlette.responses import JSONResponse, HTMLResponse, RedirectResponse
from fastai.vision import (
    ImageDataBunch,
    create_cnn,
    open_image,
    get_transforms,
    models,
)
import torch
from pathlib import Path
from io import BytesIO
import sys
import uvicorn
import aiohttp
import asyncio
import aiofiles
from starlette.routing import Mount, Router
from starlette.staticfiles import StaticFiles

async def get_bytes(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.read()

hb_images_path = Path("/tmp")
hb_fnames = [
    "/{}_1.jpg".format(c)
    for c in [
        'black_throated_mango_female',
        'black_throated_mango_male',
        'blue_chinned_sapphire_female',
        'blue_chinned_sapphire_male',
        'blue_tailed_emerald_female',
        'blue_tailed_emerald_male',
        'brown_violetear',
        'copper_rumped',
        'green_hermit_female',
        'green_hermit_male',
        'green_throated_mango',
        'little_hermit',
        'long_billed_starthroat',
        'ruby_topaz_female',
        'ruby_topaz_male',
        'rufous_breasted_hermit',
        'tufted_coquette_female',
        'tufted_coquette_male',
        'white_chested_emerald',
        'white_necked_jacobin_female',
        'white_necked_jacobin_male',
        'white_tailed_goldenthroat',
        'white_tailed_sabrewing'
    ]
]
hb_data = ImageDataBunch.from_name_re(
    hb_images_path,
    hb_fnames,
    r"/([^/]+)_\d+.jpg$",
    ds_tfms=get_transforms(),
    size=224,
)
hb_learner = create_cnn(hb_data, models.resnet34)
hb_learner.model.load_state_dict(
    torch.load("stage-2-34_3.pth", map_location="cpu")
)


def predict_image_from_bytes(bytes):
    img = open_image(BytesIO(bytes))
    _, _, losses = hb_learner.predict(img)
    return JSONResponse({
        "predictions": sorted(
            zip(hb_learner.data.classes, map(float, losses)),
            key=lambda p: p[1],
            reverse=True
        )
    })

app = Starlette()
app.debug = True
app.mount('/static', StaticFiles(directory="clientapp/build"))


@app.route("/upload", methods=["POST"])
async def upload(request):
    data = await request.form()
    bytes = await (data["file"].read())
    return predict_image_from_bytes(bytes)


@app.route("/classify-url", methods=["GET"])
async def classify_url(request):
    bytes = await get_bytes(request.query_params["imageUrl"])
    return predict_image_from_bytes(bytes)

@app.route("/")
def redirect_index(request):
  return RedirectResponse('/static/index.html')

@app.route("/form")
def redirect_to_homepage(request):
    return RedirectResponse("/")

if __name__ == "__main__":
    if "serve" in sys.argv:
        uvicorn.run(app, host="0.0.0.0", port=8008)


