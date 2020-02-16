# Contributing Overview

This file includes useful commands for generating the files and images used for the HubRise web site.

## Recommendations

1. Capture images and movies at 720p (1280 \* 720) resolution.
1. Capture content such as browsers without the address or menu bar to hide URLs and other information that's not usually visible to the public.

## Required Software

Converting movie files into other formats uses the following programs. When possible, Open Source software is selected. Most can be installed with [Homebrew](https://brew.sh/) for Mac and Linux users.

- `ImageOptim`, available at [https://imageoptim.com/mac](https://imageoptim.com/mac). This can be used to compress single-frame GIF images, JPEG and PNG files by dragging and dropping.
- ffmpeg - converts movie files. Installed with `brew install ffmpeg`.
- gificle - used to convert movie files into animated gifs of fairly decent quality and size. Installed with `brew install gifsicle`.
- ImageMagick - converts image files (single frame and animated). Installed with `brew install imagemagick`.

## Compressing PNG and JPG images

The Open Source program

## Converting raw movie files

Depending on how you capture your screen in movie format, you may have different movie files. This section is written for MAC users who will capture QuickTime movie files, but the instructions will work for other systems.

Movie files work best as either MP4 or webm files. The latter will take a long time to convert, but offers excellent compression and quality, and is HTML5 compliant. The following commands will convert a QuickTime movie file into a MP4 and webm version. Typically, a MP4 file is 20% the size of a MOV file, and a webm file is 15% of the MOV file (individual results may vary).

```bash
ffmpeg -i source.mov target.mp4
ffmpeg -i source.mov target.webm
```

### Converting to GIF

Converting a QuickTime Movie file to GIF requires two steps: Converting to GIF, and then compressing it. The following converts a QuickTime Movie file into a 15 frame per second GIF image, and then compresses it by adding some dithering and optimizing the frame transitions. Please note this assumes an environment such as bash or zsh, and uses the \ character as an escape character.

```bash
ffmpeg -i source.mov -r 15 -f gif - | gifsicle  > target.gif
magick target.gif -coalesce -fuzz 2% -remap target.gif\[0\] -layers Optimize final_targettarget.gif
```
