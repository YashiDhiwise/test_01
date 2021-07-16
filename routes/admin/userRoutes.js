const express = require('express');
const router = express.Router();
const userController = require("../../controller/admin/userController")
const auth = require("../../middleware/auth");
router.route("/admin/user/create").post(userController.addUser);
router.route("/admin/user/list").post(auth(...[ 'getAllByUserInAdminPlatform' ]),userController.findAllUser);
router.route("/admin/user/:id").get(auth(...[ 'getByUserInAdminPlatform' ]),userController.getUser);
router.route("/admin/user/count").post(auth(...[ 'getCountByUserInAdminPlatform' ]),userController.getUserCount);
router.route("/admin/user/aggregate").post(auth(...[ 'aggregateByUserInAdminPlatform' ]),userController.getUserByAggregate);
router.route("/admin/user/update/:id").put(auth(...[ 'updateByUserInAdminPlatform' ]),userController.updateUser);    
router.route("/admin/user/partial-update/:id").put(auth(...[ 'partialUpdateByUserInAdminPlatform' ]),userController.partialUpdateUser);
router.route("/admin/user/softDelete/:id").put(auth(...[ 'softDeleteByUserInAdminPlatform' ]),userController.softDeleteUser);
router.route("/admin/user/addBulk").post(userController.bulkInsertUser);
router.route("/admin/user/updateBulk").put(auth(...[ 'updateBulkByUserInAdminPlatform' ]),userController.bulkUpdateUser);
router.route("/admin/user/delete/:id").delete(auth(...[ 'deleteByUserInAdminPlatform' ]),userController.deleteUser);
router.route("/admin/user/change-password").put(auth(...[ 'changePasswordByUserInAdminPlatform' ]),userController.changePassword);

module.exports = router;
