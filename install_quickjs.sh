[ -d deps ] || mkdir deps
cd deps
rm -rf quickjs
mkdir quickjs
wget https://bellard.org/quickjs/quickjs-2021-03-27.tar.xz -O - | \
    tar -xJ -C quickjs --strip-components=1
cd quickjs
make
sudo make install
