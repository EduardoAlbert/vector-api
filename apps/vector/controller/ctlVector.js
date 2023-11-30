const sort = (req, res) => {
    const { vector } = req.body;

    if (!vector || !vector.length || vector.length < 2 || vector.length > 20) {
        return res.status(400).json({ error: "Invalid vector." });
    }

    const sortedVector = [...vector].sort((a, b) => a - b);

    res.json(sortedVector);
};

const minmax = (req, res) => {
    const { vector } = req.body;

    if (!vector || !vector.length || vector.length < 2 || vector.length > 20) {
        return res.status(400).json({ error: "Invalid vector." });
    }

    const min = Math.min(...vector);
    const max = Math.max(...vector);

    res.json([min, max]);
};

module.exports = {
    sort,
    minmax,
};
