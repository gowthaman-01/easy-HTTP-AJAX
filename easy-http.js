function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
    let self = this.http;
    self.open('GET', url, true);
    self.onload = function () {
        if (self.status === 200) {
            callback(null, self.responseText);
        }
        else {
            callback('Error' + self.status)
        }
    }
    self.send();
}

// Make HTTP POST request
easyHTTP.prototype.post = function (url, data, callback) {
    let self = this.http;
    self.open('POST', url, true);
    self.setRequestHeader('Content-type', 'application/json');
    self.onload = function () {
        callback(null, self.responseText);
    }
    self.send(JSON.stringify(data));
}

// Make HTTP PUT request
easyHTTP.prototype.put = function (url, data, callback) {
    let self = this.http;
    self.open('PUT', url, true);
    self.setRequestHeader('Content-type', 'application/json');
    self.onload = function () {
        callback(null, self.responseText);
    }
    self.send(JSON.stringify(data));
}

easyHTTP.prototype.delete = function (url, callback) {
    let self = this.http;
    self.open('DELETE', url, true);
    self.onload = function () {
        if (self.status === 200) {
            callback(null, 'Post successfully deleted');
        }
        else {
            callback('Error' + self.status)
        }
    }
    self.send();
}