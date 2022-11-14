#!/bin/bash

SCHEME=$1
OUTPUT=$2
PLATFORM=$3

export LC_CTYPE=en_US.UTF-8

set -o pipefail && xcodebuild clean docbuild -scheme "$SCHEME" \
    -destination generic/platform=$PLATFORM \
    OTHER_DOCC_FLAGS="--transform-for-static-hosting --hosting-base-path $SCHEME --output-path $OUTPUT" | xcpretty