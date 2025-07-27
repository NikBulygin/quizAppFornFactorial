/**
 * @swagger
 * components:
 *   schemas:
 *     Test:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique test identifier
 *         title:
 *           type: string
 *           description: Test title
 *         description:
 *           type: string
 *           description: Test description
 *         image:
 *           type: string
 *           description: Test image URL
 *         deadline:
 *           type: string
 *           format: date-time
 *           description: Test deadline
 *         timeLimit:
 *           type: integer
 *           description: Time limit in minutes
 *         randomizeQuestions:
 *           type: boolean
 *           description: Whether to randomize question order
 *         randomizeAnswers:
 *           type: boolean
 *           description: Whether to randomize answer order
 *         difficultyDistribution:
 *           type: object
 *           properties:
 *             easy:
 *               type: integer
 *             medium:
 *               type: integer
 *             hard:
 *               type: integer
 *         sections:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/TestSection'
 *         questions:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/TestQuestion'
 *         authorId:
 *           type: string
 *           description: ID of the test author
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Test tags
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       required: [title, description, authorId]
 *     
 *     TestQuestion:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         difficulty:
 *           type: string
 *           enum: [easy, medium, hard]
 *         points:
 *           type: integer
 *         answers:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/TestAnswer'
 *         correctAnswerIds:
 *           type: array
 *           items:
 *             type: string
 *     
 *     TestAnswer:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         text:
 *           type: string
 *     
 *     TestSection:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         questions:
 *           type: array
 *           items:
 *             type: string
 *         questionCount:
 *           type: integer
 *     
 *     PassedTest:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         testId:
 *           type: string
 *         userId:
 *           type: string
 *         status:
 *           type: string
 *           enum: [in_progress, completed, cancelled, created]
 *         startTime:
 *           type: string
 *           format: date-time
 *         endTime:
 *           type: string
 *           format: date-time
 *         timeSpent:
 *           type: integer
 *         totalScore:
 *           type: integer
 *         maxScore:
 *           type: integer
 *         percentage:
 *           type: number
 *         isPassed:
 *           type: boolean
 */ 