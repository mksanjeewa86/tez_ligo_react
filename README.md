## compile ligo contract
```
docker run --rm -v "$PWD":"$PWD" -w "$PWD" ligolang/ligo:0.36.0
alias ligo='docker run --rm -v "$PWD":"$PWD" -w "$PWD" ligolang/ligo:0.36.0'
ligo compile contract contracts/increment.ligo -o contracts/increment.tz
```
update network 
```
tezos-client --endpoint https://rpc.hangzhounet.teztnets.xyz config update
```
compile contract
```
tezos-client originate contract increment \
transferring 0 from alice \
running contracts/increment.tz \
--init 0 --burn-cap 0.1
```
after getting the contract address edit the src/utils/config.js => contractAddress