from ._version import __version__
from pathlib import Path


def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "jupyterlab_lego_boost"
    }]
