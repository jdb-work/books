

###invokeService(url ->
    class client
        Titanium.Network.createHTTPClient()
        @setTimeout 10000
        @open 'GET', url
        @send
)###




# c.onError = (e) -> Ti.API.info e.error

# module.exports = xhr_download

###
class ServiceConsumer

    yield (url, type='GET') on :client ->
        new Titanium.Network.createHTTPClient()
        setTimeout 10000
        open type, url
        send
###
