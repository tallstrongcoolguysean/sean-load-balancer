function seanLoadBalancer({ things, apiKey }) {
    if (!things || !apiKey) {
        throw new Error('Things and apiKey are required');
    }

    return things[
        Math.floor(Math.random() * things.length)
      ];
}

module.exports = seanLoadBalancer;
