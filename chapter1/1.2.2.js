
/**
 * Performs a painter painting a particular painting.
 * @param {Painting} painter 
 * @param {string} painting 
 * @returns {boolean} Whether the painter painted the painting.
 */
function paintPainting(painter, painting) {
    return painter
        .prepare()
        .paint(painting, painter.ownMaterials)
        .finish();
}