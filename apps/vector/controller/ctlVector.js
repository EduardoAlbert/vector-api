/**
 * Ordena os elementos de um vetor em ordem crescente.
 *
 * @param {Object} req - O objeto de requisição contendo o vetor a ser ordenado.
 * @param {Object} res - O objeto de resposta para enviar o vetor ordenado como JSON.
 * @returns {Object} - Resposta JSON com o vetor ordenado ou uma mensagem de erro.
 */
const sort = (req, res) => {
    const { vector } = req.body;

    // Verifica se o vetor é válido
    if (!vector || !vector.length || vector.length < 2 || vector.length > 20) {
        return res.status(400).json({ error: "Invalid vector." });
    }

    // Cria uma cópia do vetor antes de ordenar
    const sortedVector = [...vector].sort((a, b) => a - b);

    // Envia o vetor ordenado como resposta JSON
    res.json(sortedVector);
};

/**
 * Encontra os valores mínimo e máximo de um vetor.
 *
 * @param {Object} req - O objeto de requisição contendo o vetor.
 * @param {Object} res - O objeto de resposta para enviar os valores mínimo e máximo como JSON.
 * @returns {Object} - Resposta JSON com os valores mínimo e máximo ou uma mensagem de erro.
 */
const minmax = (req, res) => {
    const { vector } = req.body;

    // Verifica se o vetor é válido
    if (!vector || !vector.length || vector.length < 2 || vector.length > 20) {
        return res.status(400).json({ error: "Invalid vector." });
    }

    // Encontra os valores mínimo e máximo do vetor
    const min = Math.min(...vector);
    const max = Math.max(...vector);

    // Envia os valores mínimo e máximo como resposta JSON
    res.json([min, max]);
};

module.exports = {
    sort,
    minmax,
};
