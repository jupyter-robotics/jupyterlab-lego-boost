# jupyterlab-lego-boost

[![Github Actions Status](https://github.com/QuantStack/jupyterlab-lego-boost/workflows/Build/badge.svg)](https://github.com/QuantStack/jupyterlab-lego-boost/actions/workflows/build.yml)[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/QuantStack/jupyterlab-lego-boost/main?urlpath=lab)
Blockly extension for JupyterLab to control the Lego Boost

## Blockly

Blockly is a library from Google for building beginner-friendly block-based programming languages.

Docs: https://developers.google.com/blockly/guides/overview
Repo: https://github.com/google/blockly

## Lego Boost Robotics Set

A Lego creative toolbox which offers an easy way to learn the basics of coding, engineering and robotics.

Link: https://www.lego.com/en-de/product/boost-creative-toolbox-17101

## Requirements

- JupyterLab == 3.4

## Install

To install the extension, execute:

```bash
micromamba create -n boost -c conda-forge python nodejs yarn jupyterlab==3.4 jupyter-packaging jupyterlab-language-pack-es-ES jupyterlab-language-pack-fr-FR ipykernel xeus-python xeus-lua
micromamba activate boost
pip install jupyterlab-lego-boost
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall jupyterlab-lego-boost
```

## Connecting to Lego Boost

**Note** : Before you start using the extension, make sure the firmware is updated from the official app. Most errors related to a faulty connection can easily be fixed by updating the firmware. Sometimes multiple firware updates can take place, one after the other, each time you connect to the MoveHub from the official app.

In order to connect to the robot you only need the bluetooth address of your MoveHub, which can be found from the bluetooth settings of your device. Once you have it, just replace it in the `examples/demo.jpblockly' file, specifically in the connection block, after that you are ready to try out the demo!

When you run the code, make sure you press the button on the MoveHub, such that the led is blinking, which means its looking for a connection. Once you are successfuly connected to it, the led will turn blue. Every code need to start by using the connection block and finish with the disconnect block.

When you want to run another code snippet, if you are getting the error that `Communication threads are not working`, manually stop the kernel and restart it, before you run the code.

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
micromamba create -n boost -c conda-forge python nodejs yarn jupyterlab==3.4 jupyter-packaging jupyterlab-language-pack-es-ES jupyterlab-language-pack-fr-FR ipykernel xeus-python xeus-lua
micromamba activate boost
# Clone the repo to your local environment
# Change directory to the jupyterlab-lego-boost directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall jupyterlab-lego-boost
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlab-lego-boost` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)
