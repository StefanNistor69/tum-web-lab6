const express = require('express');
const { getStories, getStoryById, createStory, updateStory, deleteStory } = require('../controllers/storyController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /api/stories:
 *   get:
 *     summary: Get all stories
 *     tags: [Stories]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of stories
 */
router.get('/', authMiddleware(['user', 'admin']), getStories);

/**
 * @swagger
 * /api/stories/{id}:
 *   get:
 *     summary: Get a story by ID
 *     tags: [Stories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The story ID
 *     responses:
 *       200:
 *         description: A single story
 *       404:
 *         description: Story not found
 */
router.get('/:id', authMiddleware(['user', 'admin']), getStoryById);

/**
 * @swagger
 * /api/stories:
 *   post:
 *     summary: Create a new story
 *     tags: [Stories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Story created successfully
 *       500:
 *         description: Server error
 */
router.post('/', authMiddleware(['user', 'admin']), createStory);

/**
 * @swagger
 * /api/stories/{id}:
 *   put:
 *     summary: Update a story
 *     tags: [Stories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The story ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Story updated successfully
 *       404:
 *         description: Story not found
 *       500:
 *         description: Server error
 */
router.put('/:id', authMiddleware(['user', 'admin']), updateStory);

/**
 * @swagger
 * /api/stories/{id}:
 *   delete:
 *     summary: Delete a story
 *     tags: [Stories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The story ID
 *     responses:
 *       200:
 *         description: Story deleted successfully
 *       404:
 *         description: Story not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', authMiddleware(['admin']), deleteStory);

module.exports = router;
