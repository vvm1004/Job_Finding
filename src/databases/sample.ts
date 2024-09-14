export const ADMIN_ROLE = "ADMIN";
export const USER_ROLE = "USER";


export const INIT_PERMISSIONS = [
    {
        "_id": "648ab415f4328bd3153ee211",
        "name": "Get Company with paginate",
        "apiPath": "/api/v1/companies",
        "method": "GET",
        "module": "COMPANIES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T06:47:49.369Z",
        "updatedAt": "2023-06-15T06:54:05.131Z",
        "__v": 0,
        "updatedBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        }
    },
    {
        "_id": "648ab436f4328bd3153ee216",
        "name": "Create Company",
        "apiPath": "/api/v1/companies",
        "method": "POST",
        "module": "COMPANIES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T06:48:22.224Z",
        "updatedAt": "2023-06-15T06:48:22.224Z",
        "__v": 0
    },
    {
        "_id": "648ab4d5f4328bd3153ee21b",
        "name": "Update Company",
        "apiPath": "/api/v1/companies/:id",
        "method": "PATCH",
        "module": "COMPANIES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T06:51:01.241Z",
        "updatedAt": "2023-06-15T06:51:01.241Z",
        "__v": 0
    },
    {
        "_id": "648ab4ebf4328bd3153ee220",
        "name": "Delete Company",
        "apiPath": "/api/v1/companies/:id",
        "method": "DELETE",
        "module": "COMPANIES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T06:51:23.973Z",
        "updatedAt": "2023-06-15T06:51:23.973Z",
        "__v": 0
    },
    {
        "_id": "648ab5a8072f2a2ef910638d",
        "name": "Get Company by id",
        "apiPath": "/api/v1/companies/:id",
        "method": "GET",
        "module": "COMPANIES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T06:54:32.799Z",
        "updatedAt": "2023-06-15T06:54:32.799Z",
        "__v": 0
    },
    {
        "_id": "648ab6d3fa16b294212e4033",
        "name": "Create User",
        "apiPath": "/api/v1/users",
        "method": "POST",
        "module": "USERS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T06:59:31.898Z",
        "updatedAt": "2023-06-15T06:59:31.898Z",
        "__v": 0
    },
    {
        "_id": "648ab6e7fa16b294212e4038",
        "name": "Get User by Id",
        "apiPath": "/api/v1/users/:id",
        "method": "GET",
        "module": "USERS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T06:59:51.041Z",
        "updatedAt": "2023-06-15T06:59:51.041Z",
        "__v": 0
    },
    {
        "_id": "648ab6fdfa16b294212e403d",
        "name": "Get User with paginate",
        "apiPath": "/api/v1/users",
        "method": "GET",
        "module": "USERS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T07:00:13.364Z",
        "updatedAt": "2023-06-15T07:00:13.364Z",
        "__v": 0
    },
    {
        "_id": "648ab719fa16b294212e4042",
        "name": "Update User",
        "apiPath": "/api/v1/users/:id",
        "method": "PATCH",
        "module": "USERS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T07:00:41.934Z",
        "updatedAt": "2023-06-15T07:00:41.934Z",
        "__v": 0
    },
    {
        "_id": "648ab728fa16b294212e4047",
        "name": "Delete User",
        "apiPath": "/api/v1/users/:id",
        "method": "DELETE",
        "module": "USERS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T07:00:56.274Z",
        "updatedAt": "2023-06-15T07:00:56.274Z",
        "__v": 0
    },
    {
        "_id": "648ab750fa16b294212e404c",
        "name": "Upload Single File",
        "apiPath": "/api/v1/files/upload",
        "method": "POST",
        "module": "FILES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T07:01:36.923Z",
        "updatedAt": "2023-06-15T07:01:36.923Z",
        "__v": 0
    },
    {
        "_id": "648ad488dafdb9754f40b846",
        "name": "Create a Job",
        "apiPath": "/api/v1/jobs",
        "method": "POST",
        "module": "JOBS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:06:16.508Z",
        "updatedAt": "2023-06-15T09:06:16.508Z",
        "__v": 0
    },
    {
        "_id": "648ad499dafdb9754f40b84b",
        "name": "Get a job by id",
        "apiPath": "/api/v1/jobs/:id",
        "method": "GET",
        "module": "JOBS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:06:33.697Z",
        "updatedAt": "2023-06-15T09:06:33.697Z",
        "__v": 0
    },
    {
        "_id": "648ad4a6dafdb9754f40b850",
        "name": "Update a Job",
        "apiPath": "/api/v1/jobs/:id",
        "method": "PATCH",
        "module": "JOBS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:06:46.085Z",
        "updatedAt": "2023-06-15T09:06:46.085Z",
        "__v": 0
    },
    {
        "_id": "648ad4ccdafdb9754f40b859",
        "name": "Get Job with paginate",
        "apiPath": "/api/v1/jobs",
        "method": "GET",
        "module": "JOBS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:07:24.175Z",
        "updatedAt": "2023-06-15T09:07:24.175Z",
        "__v": 0
    },
    {
        "_id": "648ad4d9dafdb9754f40b85e",
        "name": "Delete a Job",
        "apiPath": "/api/v1/jobs/:id",
        "method": "DELETE",
        "module": "JOBS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:07:37.896Z",
        "updatedAt": "2023-06-15T09:07:37.896Z",
        "__v": 0
    },
    {
        "_id": "648ad4fedafdb9754f40b863",
        "name": "Create a Resume",
        "apiPath": "/api/v1/resumes",
        "method": "POST",
        "module": "RESUMES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:08:14.659Z",
        "updatedAt": "2023-06-15T09:08:14.659Z",
        "__v": 0
    },
    {
        "_id": "648ad511dafdb9754f40b868",
        "name": "Fetch resume with paginate",
        "apiPath": "/api/v1/resumes",
        "method": "GET",
        "module": "RESUMES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:08:33.395Z",
        "updatedAt": "2023-06-15T09:08:33.395Z",
        "__v": 0
    },
    {
        "_id": "648ad522dafdb9754f40b86d",
        "name": "Get resume by id",
        "apiPath": "/api/v1/resumes/:id",
        "method": "GET",
        "module": "RESUMES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:08:50.801Z",
        "updatedAt": "2023-06-15T09:08:50.801Z",
        "__v": 0
    },
    {
        "_id": "648ad53bdafdb9754f40b872",
        "name": "Delete a resume",
        "apiPath": "/api/v1/resumes/:id",
        "method": "DELETE",
        "module": "RESUMES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:09:15.785Z",
        "updatedAt": "2023-06-15T09:09:15.785Z",
        "__v": 0
    },
    {
        "_id": "648ad555dafdb9754f40b877",
        "name": "Update resume status",
        "apiPath": "/api/v1/resumes/:id",
        "method": "PATCH",
        "module": "RESUMES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:09:41.694Z",
        "updatedAt": "2023-06-15T09:09:41.694Z",
        "__v": 0
    },
    {
        "_id": "648ad56ddafdb9754f40b87c",
        "name": "Fetch resumes by user",
        "apiPath": "/api/v1/resumes/by-user",
        "method": "POST",
        "module": "RESUMES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:10:05.961Z",
        "updatedAt": "2023-06-15T09:10:05.961Z",
        "__v": 0
    },
    {
        "_id": "648ad59adafdb9754f40b881",
        "name": "Create a permission",
        "apiPath": "/api/v1/permissions",
        "method": "POST",
        "module": "PERMISSIONS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:10:50.946Z",
        "updatedAt": "2023-06-15T09:10:50.946Z",
        "__v": 0
    },
    {
        "_id": "648ad5aedafdb9754f40b886",
        "name": "Fetch Permission with paginate",
        "apiPath": "/api/v1/permissions",
        "method": "GET",
        "module": "PERMISSIONS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:11:10.914Z",
        "updatedAt": "2023-06-15T09:11:10.914Z",
        "__v": 0
    },
    {
        "_id": "648ad5c5dafdb9754f40b88b",
        "name": "Fetch permission by id",
        "apiPath": "/api/v1/permissions/:id",
        "method": "GET",
        "module": "PERMISSIONS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:11:33.234Z",
        "updatedAt": "2023-06-15T09:11:33.234Z",
        "__v": 0
    },
    {
        "_id": "648ad5d4dafdb9754f40b890",
        "name": "Update a permission",
        "apiPath": "/api/v1/permissions/:id",
        "method": "PATCH",
        "module": "PERMISSIONS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:11:48.081Z",
        "updatedAt": "2023-06-15T09:11:48.081Z",
        "__v": 0
    },
    {
        "_id": "648ad5ebdafdb9754f40b895",
        "name": "Delete a permission",
        "apiPath": "/api/v1/permissions/:id",
        "method": "DELETE",
        "module": "PERMISSIONS",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:12:11.323Z",
        "updatedAt": "2023-06-15T09:12:11.323Z",
        "__v": 0
    },
    {
        "_id": "648ad613dafdb9754f40b89a",
        "name": "Create Role",
        "apiPath": "/api/v1/roles",
        "method": "POST",
        "module": "ROLES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:12:51.974Z",
        "updatedAt": "2023-06-15T09:12:51.974Z",
        "__v": 0
    },
    {
        "_id": "648ad622dafdb9754f40b89f",
        "name": "Fetch roles with paginate",
        "apiPath": "/api/v1/roles",
        "method": "GET",
        "module": "ROLES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:13:06.618Z",
        "updatedAt": "2023-06-15T09:13:06.618Z",
        "__v": 0
    },
    {
        "_id": "648ad630dafdb9754f40b8a6",
        "name": "Fetch role by id",
        "apiPath": "/api/v1/roles/:id",
        "method": "GET",
        "module": "ROLES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:13:20.853Z",
        "updatedAt": "2023-06-15T09:13:20.853Z",
        "__v": 0
    },
    {
        "_id": "648ad640dafdb9754f40b8ab",
        "name": "Update Role",
        "apiPath": "/api/v1/roles/:id",
        "method": "PATCH",
        "module": "ROLES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:13:36.836Z",
        "updatedAt": "2023-06-15T09:13:36.836Z",
        "__v": 0
    },
    {
        "_id": "648ad650dafdb9754f40b8b0",
        "name": "Delete a Role",
        "apiPath": "/api/v1/roles/:id",
        "method": "DELETE",
        "module": "ROLES",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "vovanminhv23@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2023-06-15T09:13:52.798Z",
        "updatedAt": "2023-06-15T09:13:52.798Z",
        "__v": 0
    }
]

export const INIT_COMPANY =
    [{
        "name": "Amazon.com, Inc",
        "address": "Seattle, Washington",
        "description": "<p><strong>Amazon.com, Inc.</strong>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[1]</sup></a>&nbsp;(<a href=\"https://en.wikipedia.org/wiki/Help:IPA/English\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">/ˈæməzɒn/</a>) là một&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_ty_%C4%91a_qu%E1%BB%91c_gia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công ty công nghệ đa quốc gia</a>&nbsp;của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/M%E1%BB%B9\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Mỹ</a>&nbsp;có trụ sở tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Seattle\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Seattle, Washington</a>&nbsp;tập trung vào&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90i%E1%BB%87n_to%C3%A1n_%C4%91%C3%A1m_m%C3%A2y\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">điện toán đám mây</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Stream\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">truyền phát kỹ thuật số</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Tr%C3%AD_tu%E1%BB%87_nh%C3%A2n_t%E1%BA%A1o\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">trí tuệ nhân tạo</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C6%B0%C6%A1ng_m%E1%BA%A1i_%C4%91i%E1%BB%87n_t%E1%BB%AD\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">thương mại điện tử</a>. Công ty này được coi là một trong những công ty công nghệ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/B%E1%BB%91n_c%C3%B4ng_ty_c%C3%B4ng_ngh%E1%BB%87_l%E1%BB%9Bn\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Big Four</a>&nbsp;cùng với&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Facebook\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Facebook</a>.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-2\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[2]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[3]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-4\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[4]</sup></a></p><p><br></p><p>Amazon được biết đến với việc làm thay đổi tư duy của các ngành&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_nghi%E1%BB%87p\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công nghiệp</a>&nbsp;đã được thiết lập thông qua đổi mới công nghệ và phát triển quy mô lớn.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-5\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[5]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-6\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[6]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-7\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[7]</sup></a>&nbsp;Công ty này là&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Th%E1%BB%8B_tr%C6%B0%E1%BB%9Dng_th%C6%B0%C6%A1ng_m%E1%BA%A1i_%C4%91i%E1%BB%87n_t%E1%BB%AD&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">thị trường thương mại điện tử</a>&nbsp;lớn nhất thế giới, nhà cung cấp&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Tr%E1%BB%A3_l%C3%BD_AI&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">trợ lý AI</a>&nbsp;và nền tảng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90i%E1%BB%87n_to%C3%A1n_%C4%91%C3%A1m_m%C3%A2y\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">điện toán đám mây</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-8\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[8]</sup></a>&nbsp;được đo bằng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Doanh_thu\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">doanh thu</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Gi%C3%A1_tr%E1%BB%8B_v%E1%BB%91n_h%C3%B3a_th%E1%BB%8B_tr%C6%B0%E1%BB%9Dng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">vốn hóa thị trường</a>.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-9\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[9]</sup></a>&nbsp;Amazon là&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Danh_s%C3%A1ch_c%C3%A1c_c%C3%B4ng_ty_Internet_l%E1%BB%9Bn_nh%E1%BA%A5t\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công ty Internet lớn nhất tính theo doanh thu</a>&nbsp;trên thế giới.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-10\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[10]</sup></a>&nbsp;Đây là&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Danh_s%C3%A1ch_c%C3%B4ng_ty_s%E1%BB%AD_d%E1%BB%A5ng_nhi%E1%BB%81u_lao_%C4%91%E1%BB%99ng_nh%E1%BA%A5t_Hoa_K%E1%BB%B3&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">công ty tư nhân lớn thứ hai ở Hoa Kỳ</a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-11\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[11]</sup></a>&nbsp;và là một trong những công ty có giá trị nhất thế giới. Amazon là&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Danh_s%C3%A1ch_c%C3%A1c_c%C3%B4ng_ty_c%C3%B4ng_ngh%E1%BB%87_l%E1%BB%9Bn_nh%E1%BA%A5t\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công ty công nghệ lớn thứ hai</a>&nbsp;tính theo doanh thu.</p><p><br></p><p>Amazon được&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Jeff_Bezos\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Jeff Bezos</a>&nbsp;thành lập vào ngày 5 tháng 7 năm 1994, tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Bellevue,_Washington\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Bellevue, Washington</a>. Công ty ban đầu kinh doanh như một nhà phân phối trực tuyến&nbsp;<a href=\"https://vi.wikipedia.org/wiki/S%C3%A1ch\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">sách</a>&nbsp;nhưng sau đó mở rộng thêm để bán đồ điện tử,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ph%E1%BA%A7n_m%E1%BB%81m\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">phần mềm</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Tr%C3%B2_ch%C6%A1i_video\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">trò chơi video</a>, may mặc,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%E1%BB%93_n%E1%BB%99i_th%E1%BA%A5t\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">đồ nội thất</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%E1%BB%B1c_ph%E1%BA%A9m\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">thực phẩm</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%E1%BB%93_ch%C6%A1i\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">đồ chơi</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Trang_s%E1%BB%A9c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">trang sức</a>. Năm 2015, Amazon đã vượt qua&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Walmart\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Walmart</a>&nbsp;trở thành nhà bán lẻ có giá trị nhất tại Hoa Kỳ tính theo&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Gi%C3%A1_tr%E1%BB%8B_v%E1%BB%91n_h%C3%B3a_th%E1%BB%8B_tr%C6%B0%E1%BB%9Dng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">giá trị vốn hóa thị trường</a>.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-:3-12\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[12]</sup></a>&nbsp;Vào năm 2017, Amazon đã mua lại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Whole_Foods_Market\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Whole Foods Market</a>&nbsp;với giá 13,4 tỷ đô la, điều này đã làm tăng đáng kể sự hiện diện của Amazon với tư cách là một nhà bán lẻ truyền thống.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-13\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[13]</sup></a>&nbsp;Năm 2018, Bezos tuyên bố rằng dịch vụ giao hàng trong hai ngày của họ,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon_Prime\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Amazon Prime</a>, đã có trên 100 triệu người đăng ký trên toàn thế giới.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-14\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[14]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-15\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[15]</sup></a></p><p><br></p><p>Amazon phân phối tải xuống và phát trực tuyến video, âm nhạc, audiobook thông qua các công ty con&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon_Prime_Video\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Amazon Prime Video</a>,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Amazon_Music&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Amazon Music</a>&nbsp;và Audible. Amazon cũng có một chi nhánh xuất bản,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Amazon_Publishing&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Amazon Publishing</a>, một hãng phim và truyền hình,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Amazon_Studios&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Amazon Studios</a>&nbsp;và một công ty con về điện toán đám mây,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/AWS\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Amazon Web Services</a>. Công ty cũng sản xuất hàng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90i%E1%BB%87n_t%E1%BB%AD_ti%C3%AAu_d%C3%B9ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">điện tử tiêu dùng</a>&nbsp;bao gồm thiết bị đọc ebook&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon_Kindle\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Kindle</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/M%C3%A1y_t%C3%ADnh_b%E1%BA%A3ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">máy tính bảng</a>&nbsp;Fire,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Fire_TV&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Fire TV</a>, và các thiết bị&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Amazon_Echo&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Echo</a>. Ngoài ra, các công ty con của Amazon cũng bao gồm&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Ring_(c%C3%B4ng_ty)&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Ring</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Twitch.tv\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Twitch.tv</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Whole_Foods_Market\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Whole Foods Market</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Internet_Movie_Database\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">IMDb</a>. Amazon cũng đã dính vào nhiều scandal, nhiều nhất là bị chỉ trích vì vi phạm giám sát công nghệ,<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-16\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[16]</sup></a>&nbsp;văn hóa làm việc siêu cạnh tranh và đòi hỏi cao,<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-linkedin-17\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[17]</sup></a>&nbsp;trốn thuế,<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-fortune-18\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[18]</sup></a>&nbsp;và thực hành chống cạnh tranh.<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)#cite_note-baum-19\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[19]</sup></a></p>",
        "logo": "amzon-1686574798358.jpg",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Apple Inc.",
        "address": "Cupertino, California",
        "description": "<p><strong>Apple Inc.</strong>&nbsp;là một&nbsp;<a href=\"https://vi.wikipedia.org/wiki/T%E1%BA%ADp_%C4%91o%C3%A0n\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Tập đoàn</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_ngh%E1%BB%87\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công nghệ</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_ty_%C4%91a_qu%E1%BB%91c_gia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">đa quốc gia</a>&nbsp;của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Hoa_K%E1%BB%B3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Mỹ</a>&nbsp;có trụ sở chính tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Cupertino,_California\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Cupertino, California</a>, chuyên&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Thi%E1%BA%BFt_k%E1%BA%BF\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Thiết kế</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ph%C3%A1t_tri%E1%BB%83n\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">phát triển</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/B%C3%A1n\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">bán</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90i%E1%BB%87n_t%E1%BB%AD_ti%C3%AAu_d%C3%B9ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">thiết bị điện tử tiêu dùng</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ph%E1%BA%A7n_m%E1%BB%81m\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">phần mềm máy tính</a>&nbsp;và các dịch vụ trực tuyến. Nó được coi là một trong năm&nbsp;<a href=\"https://vi.wikipedia.org/wiki/B%E1%BB%91n_c%C3%B4ng_ty_c%C3%B4ng_ngh%E1%BB%87_l%E1%BB%9Bn\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công ty lớn</a>&nbsp;của ngành&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_ngh%E1%BB%87_th%C3%B4ng_tin\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công nghệ thông tin</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Hoa_K%E1%BB%B3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Hoa Kỳ</a>&nbsp;, cùng với&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Amazon</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Microsoft\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Microsoft</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Meta_(c%C3%B4ng_ty)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Meta</a>.<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[3]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-4\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[4]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-5\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[5]</sup></a>&nbsp;Các dòng sản phẩm&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ph%E1%BA%A7n_c%E1%BB%A9ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">phần cứng</a>&nbsp;của hãng bao gồm điện thoại thông minh&nbsp;<a href=\"https://vi.wikipedia.org/wiki/IPhone\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iPhone</a>, máy tính bảng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/IPad\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iPad</a>, máy tính xách tay&nbsp;<a href=\"https://vi.wikipedia.org/wiki/MacBook\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Macbook</a>, máy tính cá nhân&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Macintosh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Mac</a>, máy nghe nhạc di động&nbsp;<a href=\"https://vi.wikipedia.org/wiki/IPod\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iPod</a>, đồng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Watch\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">hồ</a>&nbsp;thông minh&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Watch\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple Watch</a>, máy phát&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90a_ph%C6%B0%C6%A1ng_ti%E1%BB%87n\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">đa phương tiện</a>&nbsp;kỹ thuật số&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_TV\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple TV</a>, tai nghe không dây&nbsp;<a href=\"https://vi.wikipedia.org/wiki/AirPods\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">AirPods</a>, tai nghe&nbsp;<a href=\"https://vi.wikipedia.org/wiki/AirPods_Max\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">AirPods Max</a>&nbsp;và loa thông minh&nbsp;<a href=\"https://vi.wikipedia.org/wiki/HomePod\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">HomePod</a>. Phần mềm của Apple bao gồm hệ điều hành&nbsp;<a href=\"https://vi.wikipedia.org/wiki/MacOS\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">macOS</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/IOS\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iOS</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/IPadOS\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iPadOS</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/WatchOS\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">watchOS</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/TvOS\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">tvOS</a>, trình phát đa phương tiện&nbsp;<a href=\"https://vi.wikipedia.org/wiki/ITunes\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iTunes</a>, trình duyệt web&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Safari\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Safari</a>, mã nhận dạng nhạc&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Shazam_(%E1%BB%A9ng_d%E1%BB%A5ng)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Shazam</a>, gói làm việc năng suất và sáng tạo iLife và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/IWork\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iWork</a>, cũng như các ứng dụng chuyên nghiệp như&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Final_Cut_Pro\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Final Cut Pro</a>, Logic Pro và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Xcode\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Xcode</a>. Các dịch vụ trực tuyến của nó bao gồm&nbsp;<a href=\"https://vi.wikipedia.org/wiki/ITunes_Store\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iTunes Store</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/App_Store_(iOS)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iOS App Store</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/App_Store_(macOS)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Mac App Store</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Arcade\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple Arcade</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Music\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple Music</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_TV%2B\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple TV +</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/IMessage\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iMessage</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/ICloud\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iCloud</a>. Các dịch vụ khác bao gồm&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Store\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple Store</a>, Genius Bar, AppleCare,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Pay\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple Pay</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Pay\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple Pay Cash</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Card\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple Card</a>.</p><p><br></p><p>Apple được&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Steve_Jobs\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Steve Jobs</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Steve_Wozniak\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Steve Wozniak</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ronald_Wayne\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Ronald Wayne</a>&nbsp;thành lập vào tháng 4 năm 1976 để phát triển và bán máy tính cá nhân&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_I\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple I</a>&nbsp;của Wozniak, mặc dù Wayne đã bán lại cổ phần của mình trong vòng 12 ngày. Nó được hợp nhất thành&nbsp;<strong>Apple Computer, Inc.</strong>, vào tháng 1 năm 1977, và doanh số bán máy tính của nó, bao gồm cả&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_I\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple I và</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_II\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple II</a>, đã tăng nhanh chóng.<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-B%C3%A1o_%C4%91i%E1%BB%87n_t%E1%BB%AD_D%C3%A2n_tr%C3%AD-6\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[6]</sup></a></p><p><br></p><p>Jobs và Wozniak đã thuê một nhân viên thiết kế máy tính và có một dây chuyền sản xuất bắt đầu từ ga ra của Jobs. Apple&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ph%C3%A1t_h%C3%A0nh_c%C3%B4ng_khai_l%E1%BA%A7n_%C4%91%E1%BA%A7u\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">ra mắt công chúng</a>&nbsp;vào năm 1980 với thành công tài chính tức thì. Trong vài năm tiếp theo, Apple đã xuất xưởng những chiếc máy tính mới có&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Giao_di%E1%BB%87n_%C4%91%E1%BB%93_h%E1%BB%8Da_ng%C6%B0%E1%BB%9Di_d%C3%B9ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">giao diện người dùng đồ họa</a>&nbsp;sáng tạo, chẳng hạn như&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Macintosh_128K&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Macintosh ban đầu</a>&nbsp;vào năm 1984 và các quảng cáo tiếp thị của Apple cho sản phẩm của mình đã nhận được sự hoan nghênh rộng rãi. Tuy nhiên, giá sản phẩm cao và thư viện ứng dụng hạn chế đã gây ra nhiều vấn đề, cũng như tranh giành quyền lực giữa các giám đốc điều hành. Năm 1985, Wozniak rời Apple một cách thân thiện và vẫn là một nhân viên danh dự,<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-wozemployee2-7\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[7]</sup></a>&nbsp;trong khi Jobs từ chức để thành lập&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=K%E1%BA%BF_ti%E1%BA%BFp&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">NeXT,</a>&nbsp;dẫn theo một vài đồng nghiệp đi cùng.<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-rice198504152-8\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[8]</sup></a></p><p><br></p><p>Khi thị trường máy tính cá nhân mở rộng và phát triển trong suốt những năm 1990, Apple đã mất thị phần đáng kể vào tay sản phẩm độc quyền có giá thấp hơn của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Microsoft_Windows\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Microsoft Windows</a>&nbsp;trên máy tính nhái&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Intel\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Intel</a>. Hội đồng quản trị đã tuyển dụng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/T%E1%BB%95ng_gi%C3%A1m_%C4%91%E1%BB%91c_%C4%91i%E1%BB%81u_h%C3%A0nh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Giám đốc điều hành</a>&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Gil_Amelio&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Gil Amelio</a>&nbsp;với nỗ lực kéo dài 500 ngày để phục hồi công ty đang gặp khó khăn về tài chính — định hình lại công ty với việc sa thải, tái cấu trúc điều hành và tập trung vào sản phẩm. Ông đã dẫn dắt Apple mua NeXT vào năm 1997, giải quyết một chiến lược hệ điều hành thất bại và đưa Jobs trở lại.</p><p><br></p><p>Jobs giành lại vị thế lãnh đạo, trở thành CEO vào năm 2000. Apple đã nhanh chóng trở lại có lãi nhờ chiến dịch Hồi sinh&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Ngh%C4%A9_kh%C3%A1c&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Think different</a>, xây dựng lại vị thế của Apple bằng cách ra mắt&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=IMac_G3&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">iMac</a>&nbsp;vào năm 1998, mở chuỗi cửa hàng bán lẻ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Store\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple Store</a>&nbsp;vào năm 2001 và mua lại nhiều công ty để mở rộng danh mục phần mềm. Công ty đã được đổi tên thành Apple Inc. vào năm 2007, phản ánh sự tập trung vào thiết bị điện tử tiêu dùng và tung ra&nbsp;<a href=\"https://vi.wikipedia.org/wiki/IPhone\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iPhone</a>&nbsp;để đạt được thành công về tài chính và sự hoan nghênh quan trọng. Vào tháng 8 năm 2011, Jobs từ chức Giám đốc điều hành do biến chứng sức khỏe và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Tim_Cook\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Tim Cook</a>&nbsp;trở thành Giám đốc điều hành mới. Hai tháng sau, Jobs qua đời, đánh dấu sự kết thúc một kỷ nguyên của công ty. Vào tháng 6 năm 2019,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Jonathan_Ive\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Jony Ive</a>,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Gi%C3%A1m_%C4%91%E1%BB%91c_thi%E1%BA%BFt_k%E1%BA%BF&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">CDO</a>&nbsp;của Apple, rời công ty để thành lập công ty riêng của mình, nhưng tuyên bố sẽ làm việc với Apple với tư cách là khách hàng chính.</p><p><br></p><p>Tổng doanh thu hàng năm của Apple trên toàn thế giới đạt 274,5 USD&nbsp;tỷ cho năm&nbsp;<a href=\"https://vi.wikipedia.org/wiki/N%C4%83m_t%C3%A0i_ch%C3%ADnh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">tài chính</a>&nbsp;2020. Apple là&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Danh_s%C3%A1ch_c%C3%B4ng_ty_c%C3%B4ng_ngh%E1%BB%87_l%E1%BB%9Bn_nh%E1%BA%A5t\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công ty công nghệ lớn nhất thế giới</a>&nbsp;theo doanh thu và là một trong những&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Danh_s%C3%A1ch_c%C3%A1c_c%C3%B4ng_ty_%C4%91%E1%BA%A1i_ch%C3%BAng_theo_v%E1%BB%91n_h%C3%B3a_th%E1%BB%8B_tr%C6%B0%E1%BB%9Dng&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">công ty giá trị nhất thế giới</a>. Đây cũng là nhà sản xuất điện thoại di động lớn thứ ba thế giới sau&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Samsung\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Samsung</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Huawei\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Huawei</a>.<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-9\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[9]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-10\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[10]</sup></a>&nbsp;Vào tháng 8 năm 2018, Apple đã trở thành công ty Hoa Kỳ giao dịch công khai đầu tiên được định giá trên 1 nghìn tỷ đô la&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-1t-CNBC-11\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[11]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-1t-Guardian-12\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[12]</sup></a>&nbsp;và chỉ hai năm sau, vào tháng 8 năm 2020, trở thành công ty đầu tiên trị giá 2 nghìn tỷ đô la Mỹ.<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-13\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[13]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-14\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[14]</sup></a>&nbsp;Apple sử dụng 147.000 nhân viên toàn thời gian và duy trì 510&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Store\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">cửa hàng bán lẻ</a>&nbsp;tại 25 quốc gia Tính đến năm 2020.<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-15\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[15]</sup></a>&nbsp;Nó vận hành iTunes Store, là nhà bán lẻ âm nhạc lớn nhất thế giới. Tính đến tháng 1 năm 2020, hơn 1,5&nbsp;tỷ sản phẩm của Apple đang được sử dụng tích cực trên toàn thế giới.<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.#cite_note-16\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[16]</sup></a>&nbsp;Công ty cũng có mức độ&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=L%C3%B2ng_trung_th%C3%A0nh_th%C6%B0%C6%A1ng_hi%E1%BB%87u&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">trung thành với thương hiệu cao</a>&nbsp;và được xếp hạng là&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Danh_s%C3%A1ch_c%C3%A1c_th%C6%B0%C6%A1ng_hi%E1%BB%87u_c%C3%B3_gi%C3%A1_tr%E1%BB%8B_nh%E1%BA%A5t&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">thương hiệu có giá trị nhất thế giới</a>. </p><p>Tuy nhiên, Apple&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Ch%E1%BB%89_tr%C3%ADch_Apple_Inc.&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">nhận được nhiều lời chỉ trích</a>&nbsp;liên quan đến hoạt động lao động của các nhà thầu, các hoạt động môi trường và các hoạt động kinh doanh phi đạo đức, bao gồm cả&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=C%C3%A1c_h%C3%A0nh_vi_ch%E1%BB%91ng_c%E1%BA%A1nh_tranh&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">hành vi chống cạnh tranh</a>, cũng như nguồn gốc của nguyên liệu gốc.</p>",
        "logo": "apple-1686574900663.jpg",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Google LLC",
        "address": "Mountain View, California, California, Hoa Kỳ",
        "description": "<p><strong>Google&nbsp;</strong><a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_ty_tr%C3%A1ch_nhi%E1%BB%87m_h%E1%BB%AFu_h%E1%BA%A1n_(Hoa_K%E1%BB%B3)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><strong>LLC</strong></a>&nbsp;(n.đ. '<em>Công ty TNHH Google</em>') là một công ty&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_ngh%E1%BB%87\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công nghệ</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_ty_%C4%91a_qu%E1%BB%91c_gia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">đa quốc gia</a>&nbsp;của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Hoa_K%E1%BB%B3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Mỹ</a>, chuyên về các dịch vụ và sản phẩm liên quan đến&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Internet\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Internet</a>, bao gồm các công nghệ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Qu%E1%BA%A3ng_c%C3%A1o_tr%E1%BB%B1c_tuy%E1%BA%BFn\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">quảng cáo trực tuyến</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_c%E1%BB%A5_truy_v%E1%BA%A5n_d%E1%BB%AF_li%E1%BB%87u\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">công cụ tìm kiếm</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90i%E1%BB%87n_to%C3%A1n_%C4%91%C3%A1m_m%C3%A2y\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">điện toán đám mây</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ph%E1%BA%A7n_m%E1%BB%81m\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">phần mềm</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ph%E1%BA%A7n_c%E1%BB%A9ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">phần cứng</a>. Đây được coi là một trong những công ty công nghệ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Big_Four_c%C3%B4ng_ty_c%C3%B4ng_ngh%E1%BB%87\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Big Four</a>, cùng với&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon.com\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Amazon</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Apple</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Facebook\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Facebook</a>.</p><p><br></p><p>Google được thành lập vào năm&nbsp;<a href=\"https://vi.wikipedia.org/wiki/1998\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">1998</a>&nbsp;bởi&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Larry_Page\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Larry Page</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Sergey_Brin\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Sergey Brin</a>&nbsp;trong khi họ là nghiên cứu sinh đã có bằng tiến sĩ tại Đại học Stanford ở California. Họ cùng nhau sở hữu khoảng 14% cổ phần và kiểm soát 56% quyền biểu quyết của cổ đông thông qua&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%E1%BB%95_phi%E1%BA%BFu_%C6%B0u_%C4%91%C3%A3i\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">cổ phiếu ưu đãi</a>. Họ đã hợp nhất Google thành một công ty tư nhân vào ngày 4 tháng 9 năm 1998. Một đợt chào bán công khai lần đầu (IPO) diễn ra vào ngày 19 tháng 8 năm 2004 và Google chuyển đến trụ sở chính tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Mountain_View,_California\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Mountain View</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/California\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">California</a>&nbsp;với tên&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Googleplex\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Googleplex</a>. Vào tháng 8 năm 2015, Google đã công bố kế hoạch tổ chức lại công ty với tư cách là một tập đoàn có tên là&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Alphabet_Inc.\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Alphabet Inc.</a>&nbsp;Google là công ty con hàng đầu của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Alphabet_Inc.\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Alphabet</a>&nbsp;và sẽ tiếp tục là công ty ô dù vì lợi ích Internet của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Alphabet_Inc.\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Alphabet</a>.&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Sundar_Pichai\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Sundar Pichai</a>&nbsp;được bổ nhiệm làm&nbsp;<a href=\"https://vi.wikipedia.org/wiki/T%E1%BB%95ng_gi%C3%A1m_%C4%91%E1%BB%91c_%C4%91i%E1%BB%81u_h%C3%A0nh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">CEO</a>&nbsp;của Google, thay thế&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Larry_Page\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Larry Page</a>&nbsp;trở thành&nbsp;<a href=\"https://vi.wikipedia.org/wiki/T%E1%BB%95ng_gi%C3%A1m_%C4%91%E1%BB%91c_%C4%91i%E1%BB%81u_h%C3%A0nh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">CEO</a>&nbsp;của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Alphabet_Inc.\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Alphabet</a>.</p><p><br></p><p>Sự phát triển nhanh chóng của công ty kể từ khi thành lập đã kích hoạt một chuỗi các sản phẩm, mua lại để sáp nhập và hợp tác ngoài công cụ tìm kiếm cốt lõi của Google (<a href=\"https://vi.wikipedia.org/wiki/Google_T%C3%ACm_ki%E1%BA%BFm\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Tìm kiếm</a>). Nó cung cấp các dịch vụ được thiết kế cho công việc và năng suất (<a href=\"https://vi.wikipedia.org/wiki/Google_Docs\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Docs</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google_Sheets\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Sheets</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google_Slides\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Slides</a>),&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C6%B0_%C4%91i%E1%BB%87n_t%E1%BB%AD\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">email</a>&nbsp;(<a href=\"https://vi.wikipedia.org/wiki/Gmail\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Gmail</a>/<a href=\"https://vi.wikipedia.org/wiki/Inbox_b%E1%BB%9Fi_Gmail\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Inbox</a>), lập lịch và quản lý thời gian (<a href=\"https://vi.wikipedia.org/wiki/L%E1%BB%8Bch_Google\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Lịch Google</a>), lưu trữ đám mây (<a href=\"https://vi.wikipedia.org/wiki/Google_Drive\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Drive</a>), mạng xã hội (<a href=\"https://vi.wikipedia.org/wiki/Google%2B\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google+</a>), nhắn tin và trò chuyện video trực tiếp (<a href=\"https://vi.wikipedia.org/wiki/Google_Allo\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Allo</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google_Duo\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Duo</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google_Hangouts\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Hangouts</a>), dịch ngôn ngữ (<a href=\"https://vi.wikipedia.org/wiki/Google_D%E1%BB%8Bch\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Dịch</a>), lập bản đồ và điều hướng (<a href=\"https://vi.wikipedia.org/wiki/Google_Maps\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Maps</a>,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Waze&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Waze</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google_Earth\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Earth</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google_Street_View\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Chế độ xem phố</a>), chia sẻ video (<a href=\"https://vi.wikipedia.org/wiki/YouTube\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">YouTube</a>), ghi chú (<a href=\"https://vi.wikipedia.org/wiki/DeepMind\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Keep</a>) và tổ chức và chỉnh sửa ảnh (<a href=\"https://vi.wikipedia.org/wiki/Google_%E1%BA%A2nh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Ảnh</a>). Công ty dẫn đầu sự phát triển của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/H%E1%BB%87_%C4%91i%E1%BB%81u_h%C3%A0nh_di_%C4%91%E1%BB%99ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">hệ điều hành di động</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Android_(h%E1%BB%87_%C4%91i%E1%BB%81u_h%C3%A0nh)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Android</a>, trình duyệt web&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google_Chrome\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Chrome</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Chrome_OS\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Chrome OS</a>, một hệ điều hành nhẹ dựa trên trình duyệt Chrome. Google đã ngày càng chuyển sang&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ph%E1%BA%A7n_c%E1%BB%A9ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">phần cứng</a>; từ năm 2010 đến 2015, nó hợp tác với các nhà sản xuất điện tử lớn trong việc sản xuất các thiết bị&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Nexus\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Nexus</a>&nbsp;của mình và đã phát hành nhiều sản phẩm phần cứng vào tháng 10 năm 2016, bao gồm điện thoại thông minh&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google_Pixel\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Pixel</a>, loa thông minh&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Google_Home\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Google Home</a>, bộ định tuyến không dây&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Google_Wifi&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Google Wifi</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Google_Daydream&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Daydream</a>-tai nghe thực tế ảo. Google cũng đã thử nghiệm trở thành nhà cung cấp dịch vụ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Internet\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Internet</a>&nbsp;(<a href=\"https://vi.wikipedia.org/w/index.php?title=Google_Fiber&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Google Fiber</a>,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Project_Fi&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Project Fi</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Google_Station&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Google Station</a>).</p><p><br></p><p>Google.com là trang web được truy cập nhiều nhất trên thế giới. Một số dịch vụ khác của Google cũng nằm trong top 100 trang web được truy cập nhiều nhất trên thế giới, bao gồm&nbsp;<a href=\"https://vi.wikipedia.org/wiki/YouTube\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">YouTube</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Blogger_(d%E1%BB%8Bch_v%E1%BB%A5)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Blogger</a>. Google là thương hiệu có giá trị nhất thế giới tính đến năm 2017 nhưng đã nhận được sự&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=S%E1%BB%B1_ch%E1%BB%89_tr%C3%ADch_v%E1%BB%81_Google&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">chỉ trích</a>&nbsp;đáng kể liên quan đến các vấn đề như lo ngại về&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Quy%E1%BB%81n_ri%C3%AAng_t%C6%B0\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">quyền riêng tư</a>, tránh thuế, chống độc quyền,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Duy%E1%BB%87t_ch%E1%BA%B7n_b%E1%BB%9Fi_google\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">kiểm duyệt</a>&nbsp;và trung lập trong tìm kiếm. Tuyên bố&nbsp;<a href=\"https://vi.wikipedia.org/wiki/S%E1%BB%A9_m%E1%BB%87nh_(kinh_doanh)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">sứ mệnh</a>&nbsp;của Google là \"tổ chức thông tin của thế giới\", và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Kh%E1%BA%A9u_hi%E1%BB%87u\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">khẩu hiệu</a>&nbsp;không chính thức là \"Don't be evil\" (Đừng trở nên xấu xa) cho đến khi cụm từ này được xóa khỏi quy tắc ứng xử của công ty vào khoảng tháng 5 năm 2018, nhưng lại được đưa vào trở lại ngày 31 tháng 7 năm 2018.<a href=\"https://vi.wikipedia.org/wiki/Google#cite_note-:0-3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[3]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Google#cite_note-4\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[4]</sup></a></p>",
        "logo": "google-1686574998397.png",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Lazada Việt Nam",
        "address": "Lầu 19, 20 Saigon Centre, 67 Lê Lợi, phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh.",
        "description": "<p><strong>azada Việt Nam</strong>&nbsp;là một sàn giao dịch&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C6%B0%C6%A1ng_m%E1%BA%A1i_%C4%91i%E1%BB%87n_t%E1%BB%AD\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">thương mại điện tử</a>, là một phần của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Lazada_Group\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Lazada Group</a>&nbsp;–&nbsp;<a href=\"https://vi.wikipedia.org/wiki/T%E1%BA%ADp_%C4%91o%C3%A0n\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">tập đoàn</a>&nbsp;thương mại điện tử&nbsp;<a href=\"https://vi.wikipedia.org/wiki/C%C3%B4ng_ty_%C4%91a_qu%E1%BB%91c_gia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">đa quốc gia</a>&nbsp;và hiện đang có chi nhánh tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Indonesia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Indonesia</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Philippines\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Philippines</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Singapore\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Singapore</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C3%A1i_Lan\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Thái Lan</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Malaysia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Malaysia</a>. Tập đoàn Lazada hiện thuộc sở hữu của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Alibaba_(t%E1%BA%ADp_%C4%91o%C3%A0n)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">tập đoàn Alibaba</a>.<a href=\"https://vi.wikipedia.org/wiki/Lazada_Vi%E1%BB%87t_Nam#cite_note-2\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[2]</sup></a></p><p><br></p><p>Lazada được điều hành bởi&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Gi%C3%A1m_%C4%91%E1%BB%91c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">giám đốc</a>&nbsp;kiêm nhà sáng lập&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ng%C6%B0%E1%BB%9Di_%C4%90%E1%BB%A9c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">người Đức</a>&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Maximilian_Bittner&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Maximilian Bittner</a>. Sau đó,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/T%E1%BA%ADp_%C4%91o%C3%A0n_Alibaba\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">tập đoàn Alibaba</a>&nbsp;của tỷ phú&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ng%C6%B0%E1%BB%9Di_Trung_Qu%E1%BB%91c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">người Trung Quốc</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/M%C3%A3_V%C3%A2n_(th%C6%B0%C6%A1ng_nh%C3%A2n)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Jack Ma</a>&nbsp;mua lại và hoàn tất thương vụ vào đầu năm 2016.<a href=\"https://vi.wikipedia.org/wiki/Lazada_Vi%E1%BB%87t_Nam#cite_note-3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[3]</sup></a></p><p><br></p><p>Lazada có mô hình market place – là trung gian trong quy trình mua bán online. Trong tháng 1 năm 2016, Lazada Việt Nam xác nhận rằng công ty hiện đang làm việc với 3000 nhà cung cấp<a href=\"https://vi.wikipedia.org/wiki/Lazada_Vi%E1%BB%87t_Nam#cite_note-4\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[4]</sup></a>&nbsp;với 500.000 sản phẩm khác nhau.</p><p><br></p><p>Năm 2013, Lazada Việt Nam khánh thành nhà kho đầu tiên tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Khu_c%C3%B4ng_nghi%E1%BB%87p\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">khu công nghiệp</a>&nbsp;Vĩnh Lộc,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">thành phố Hồ Chí Minh</a>. Ngay sau đó một trung tâm điều phối được mở tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%C3%B4ng_Nam_B%E1%BB%99\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Đông Nam Bộ</a>&nbsp;trong năm 2014 nhằm phục vụ cho số lượng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Kh%C3%A1ch_h%C3%A0ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">khách hàng</a>&nbsp;tăng cao tại khu vực này.</p><p><br></p><p>Đến tháng 3 năm 2016, Lazada Việt nam có 35 trung tâm điều phối<a href=\"https://vi.wikipedia.org/wiki/Lazada_Vi%E1%BB%87t_Nam#cite_note-5\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[5]</sup></a>&nbsp;và 1 đội ngũ vận chuyển&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Lazada_Express&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Lazada Express</a>&nbsp;(LEX) do chính công ty cung cấp nhằm hỗ trợ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/V%E1%BA%ADn_t%E1%BA%A3i\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">vận chuyển</a>&nbsp;trực (FBL) cho nhà bán hàng.<sup>[</sup><a href=\"https://vi.wikipedia.org/wiki/Wikipedia:Ch%C3%BA_th%C3%ADch_ngu%E1%BB%93n_g%E1%BB%91c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup><em>cần dẫn nguồn</em></sup></a><sup>]</sup></p>",
        "logo": "lazada-1686575062887.png",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Netflix Inc",
        "address": "Los Gatos, California, Hoa Kỳ",
        "description": "<p><strong>Netflix Inc.</strong>&nbsp;(<a href=\"https://en.wikipedia.org/wiki/Help:IPA/English\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">/ˈnɛtflɪks/</a>) là dịch vụ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Streaming\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">truyền dữ liệu</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Video_on_demand\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">video theo yêu cầu</a>&nbsp;trên toàn cầu và cho thuê DVD trả phí tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Hoa_K%E1%BB%B3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Hoa Kỳ</a>, nơi&nbsp;<a href=\"https://vi.wikipedia.org/wiki/DVD\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">DVD</a>&nbsp;và đĩa&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Blu-ray\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Blu-ray</a>&nbsp;được gửi thông qua&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C6%B0_%C4%91i%E1%BB%87n_t%E1%BB%AD\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">thư điện tử</a>&nbsp;bởi&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Permit_Reply_Mail&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Permit Reply Mail</a>. Công ty thành lập vào năm 1997 và có trụ sở tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Los_Gatos,_California\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Los Gatos</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/California\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">California</a>. Công ty bắt đầu dịch vụ đăng ký trả phí từ năm 1999. Tính đến năm 2009, Netflix sở hữu tập hợp 100.000 tựa phim DVD và hơn 10 triệu lượt người đăng ký.<a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-8\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[8]</sup></a></p><p><br></p><p>Vào ngày 25 tháng 2 năm 2007, Netflix phân phối chiếc DVD thứ 1 tỷ.<a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-9\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[9]</sup></a>&nbsp;Tính đến giữa tháng 4 năm 2021, Netflix báo cáo có hơn 208 triệu lượt người sử dụng trên toàn cầu, bao gồm 73 triệu người dùng tại Hoa Kỳ và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Canada\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Canada</a>.<a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-10\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[10]</sup></a>&nbsp;Công ty lần đầu đưa ra dịch vụ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Truy%E1%BB%81n_d%E1%BB%AF_li%E1%BB%87u\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">truyền dữ liệu</a>&nbsp;tại thị trường quốc tế vào năm 2010<a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-Canada_Stumble-11\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[11]</sup></a>&nbsp;và tiếp tục mở rộng sang 130 lãnh thổ mới vào tháng 1 năm 2016,<a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-vb-130new-12\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[12]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-engadget-nearlyevery-13\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[13]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-verge-netflixeverywhere-14\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[14]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-recode-netflixnearly-15\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[15]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-cnet-nearlyevery-16\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[16]</sup></a>&nbsp;trong đó có&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Vi%E1%BB%87t_Nam\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Việt Nam</a>.<a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-17\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[17]</sup></a></p><p><br></p><p>Netflix được thành lập vào ngày 29 tháng 8 năm 1997, tại&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Thung_l%C5%A9ng_Scotts&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Thung lũng Scotts</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/California\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">California</a>, bởi Marc Randolph và Reed Hastings. Randolph làm giám đốc tiếp thị cho công ty của Pureings, Pure Atria. Randolph là người đồng sáng lập&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=MicroWarehouse&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">MicroWarehouse</a>, một công ty đặt hàng qua&nbsp;<a href=\"https://vi.wikipedia.org/wiki/M%C3%A1y_t%C3%ADnh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">máy tính</a>&nbsp;và sau đó được Borland International tuyển dụng làm phó chủ tịch tiếp thị. Hastings, một nhà khoa học và nhà toán học máy tính, đã bán Pure Atria cho Tập đoàn phần mềm Rational vào năm 1997 với giá 700 triệu đô la trong vụ mua lại lớn nhất trong lịch sử&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Thung_l%C5%A9ng_Silicon\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Thung lũng Silicon</a>. Họ đã nảy ra ý tưởng cho Netflix khi đi lại giữa nhà của họ ở Santa Cruz và trụ sở của Pure Atria ở Sunnyvale trong khi chờ các cơ quan quản lý của chính phủ phê duyệt việc sáp nhập, mặc dù Hastings đã đưa ra nhiều cách giải thích khác nhau về cách tạo ra ý tưởng.</p><p><br></p><p>Hastings đã đầu tư 2,5 triệu đô la tiền mặt khởi nghiệp cho Netflix. Randolph ngưỡng mộ công ty thương mại điện tử non trẻ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Amazon_(c%C3%B4ng_ty)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Amazon</a>&nbsp;và muốn tìm một danh mục lớn các mặt hàng xách tay để bán qua&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Internet\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Internet</a>&nbsp;bằng cách sử dụng một mô hình tương tự. Họ đã cân nhắc và từ chối việc bán và cho thuê băng VHS vì chúng quá đắt để dự trữ và quá mỏng mảnh để vận chuyển.<a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-:0-18\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[18]</sup></a>&nbsp;Khi họ nghe nói về DVD, lần đầu tiên được giới thiệu tại Mỹ vào ngày 24 tháng 3 năm 1997, họ đã thử nghiệm mô hình bán hoặc cho thuê DVD qua đường bưu điện, bằng cách gởi một đĩa DVD đến nhà Hastings ở Santa Cruz.<a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-:0-18\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[18]</sup></a>&nbsp;Khi chiếc đĩa được vận chuyển đến nơi nguyên vẹn, họ quyết định tham gia vào ngành công nghiệp bán và cho thuê video tại gia trị giá 16 tỷ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%C3%B4_la_M%E1%BB%B9\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">USD</a>.<a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-:0-18\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[18]</sup></a><a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-:1-19\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[19]</sup></a>&nbsp;Hastings thường được cho rằng đã chia sẻ ông quyết định bắt đầu Netflix sau khi bị phạt 40&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%C3%B4_la\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">đô la</a>&nbsp;tại một cửa hàng Blockbuster vì đã trả lại băng phim&nbsp;<em>Apollo 13</em>&nbsp;trễ hẹn, thông tin này sau đó đã được Randolph bác bỏ.<a href=\"https://vi.wikipedia.org/wiki/Netflix#cite_note-:1-19\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[19]</sup></a></p><p><br></p><p>Netflix được ra mắt vào ngày 14 tháng 4 năm 1998, đây là cửa hàng cho thuê DVD trực tuyến đầu tiên trên thế giới, lúc đầu chỉ có 30 nhân viên và 925 tựa phim có sẵn, gần như toàn bộ danh mục DVD được in vào thời điểm đó, thông qua mô hình trả tiền cho mỗi lần thuê với tỷ lệ và ngày đáo hạn tương tự như đối thủ truyền thống,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Blockbuster_LLC\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Blockbuster</a>.</p>",
        "logo": "netflix-1686706116042.png",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Adobe Photoshop",
        "address": "Microsoft Windows và Mac OS X",
        "description": "<p><strong>Adobe Photoshop</strong>&nbsp;(thường được gọi là&nbsp;<strong>Photoshop</strong>) là một&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ph%E1%BA%A7n_m%E1%BB%81m_%C4%91%E1%BB%93_h%E1%BB%8Da\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">phần mềm chỉnh sửa đồ họa</a>&nbsp;được phát triển và phát hành bởi hãng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Adobe_Systems\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Adobe Systems</a>&nbsp;ra đời vào năm 1988 trên hệ máy&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Macintosh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Macintosh</a>. Photoshop được đánh giá là phần mềm dẫn đầu thị trường về sửa ảnh&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Bitmap\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">bitmap</a>&nbsp;và được coi là chuẩn cho các ngành liên quan tới chỉnh sửa ảnh. Từ phiên bản Photoshop 7.0 ra đời năm 2002, Photoshop đã làm lên một cuộc cách mạng về ảnh&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Bitmap\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">bitmap</a>. Phiên bản mới nhất hiện nay là Adobe Photoshop CC.</p><p><br></p><p>Ngoài khả năng chính là chỉnh sửa ảnh cho các ấn phẩm, Photoshop còn được sử dụng trong các hoạt động như&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Thi%E1%BA%BFt_k%E1%BA%BF_web\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">thiết kế trang web</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/V%E1%BA%BD\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">vẽ các loại tranh</a>&nbsp;(matte painting và nhiều thể loại khác), vẽ texture cho các chương trình 3D... gần như là mọi hoạt động liên quan đến ảnh bitmap.</p><p><br></p><p>Adobe Photoshop có khả năng tương thích với hầu hết các chương trình đồ họa khác của Adobe như&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Adobe_Illustrator\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Adobe Illustrator</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Adobe_Premiere\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Adobe Premiere</a>,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=After_After_Effects&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">After After Effects</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Adobe_Encore&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Adobe Encore</a>.</p>",
        "logo": "photoshop-1686575180007.png",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Tập đoàn Adobe ",
        "address": "San Jose, California, Hoa Kỳ",
        "description": "<p><strong>Tập đoàn Adobe</strong>&nbsp;(<a href=\"https://vi.wikipedia.org/wiki/Ti%E1%BA%BFng_Anh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">tiếng Anh</a>:&nbsp;<strong>Adobe Inc.</strong>, tên gốc là&nbsp;<strong>Adobe Systems Incorporated</strong>; phát âm: a-DOE-bee, giống như&nbsp;<em>A-đô-bi</em>&nbsp;trong&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ti%E1%BA%BFng_Vi%E1%BB%87t\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">tiếng Việt</a>; mã NASDAQ: ADBE) là một công ty&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ph%E1%BA%A7n_m%E1%BB%81m\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">phần mềm</a>&nbsp;máy tính đa quốc gia của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Hoa_K%E1%BB%B3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Hoa Kỳ</a>&nbsp;có trụ sở chính đặt tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/San_Jose,_California\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">San Jose, California</a>.</p><p>Adobe được thành lập vào tháng 12 năm 1982<a href=\"https://vi.wikipedia.org/wiki/T%E1%BA%ADp_%C4%91o%C3%A0n_Adobe#cite_note-fastfacts-3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[3]</sup></a>&nbsp;bởi&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=John_Warnock&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">John Warnock</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Charles_Geschke&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Charles Geschke</a>. Họ đã thành lập công ty này sau khi dời&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Xerox_PARC\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Xerox PARC</a>&nbsp;nhằm phát triển và bán&nbsp;<a href=\"https://vi.wikipedia.org/wiki/PostScript\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">PostScript</a>, một&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Ng%C3%B4n_ng%E1%BB%AF_giao_di%E1%BB%87n&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">ngôn ngữ giao diện</a>&nbsp;giống như&nbsp;<a href=\"https://vi.wikipedia.org/wiki/HTML\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">HTML</a>&nbsp;phục vụ cho in ấn. Năm 1985, hãng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Apple_Inc.\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">máy tính Apple</a>&nbsp;cấp phép sử dụng PostScript trong&nbsp;<a href=\"https://vi.wikipedia.org/wiki/M%C3%A1y_in\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">máy in</a>&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=LaserWriter&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">LaserWriter</a>&nbsp;của họ, làm lóe lên cuộc cách mạng&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Xu%E1%BA%A5t_b%E1%BA%A3n_tr%C3%AAn_desktop&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">xuất bản trên desktop</a>. Tên&nbsp;<em>Adobe</em>&nbsp;của công ty xuất phát từ từ&nbsp;<em>Adobe Creek</em>, tên một con suối nhỏ chảy về phía Nam ở hạt Sonoma,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Bang_California\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">bang California</a>, vốn chảy phía sau ngôi nhà của một trong những sáng lập viên của công ty.<a href=\"https://vi.wikipedia.org/wiki/T%E1%BA%ADp_%C4%91o%C3%A0n_Adobe#cite_note-fastfacts-3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[3]</sup></a>&nbsp;Tháng 12 năm 2005, Adobe đã thâu tóm thành công đối thủ cạnh tranh của mình,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Macromedia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Macromedia</a>.</p><p><br></p><p>Tại thời điểm năm 2010, Adobe Systems có 9.117 nhân viên,<a href=\"https://vi.wikipedia.org/wiki/T%E1%BA%ADp_%C4%91o%C3%A0n_Adobe#cite_note-10K-2\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[2]</sup></a><a href=\"https://vi.wikipedia.org/wiki/T%E1%BA%ADp_%C4%91o%C3%A0n_Adobe#cite_note-fastfacts-3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[3]</sup></a>&nbsp;với 40% trong số đó làm việc tại San Jose. Adobe cũng có những trụ sở phát triển chính tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Seattle\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Seattle</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/San_Francisco\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">San Francisco, California</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Minneapolis,_Minnesota\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Minneapolis</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Newton,_Massachusetts\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Newton, Massachusetts</a>,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=San_Luis_Obispo,_California&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">San Luis Obispo, California</a>&nbsp;(Hoa Kỳ);&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ottawa\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Ottawa</a>&nbsp;(Canada);&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Hamburg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Hamburg</a>&nbsp;(<a href=\"https://vi.wikipedia.org/wiki/%C4%90%E1%BB%A9c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Đức</a>),&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Noida\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Noida</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Bengaluru\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Bangalore</a>, (<a href=\"https://vi.wikipedia.org/wiki/%E1%BA%A4n_%C4%90%E1%BB%99\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Ấn Độ</a>),&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Bucharest\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Bucharest</a>&nbsp;(<a href=\"https://vi.wikipedia.org/wiki/Rom%C3%A2nia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">România</a>).</p><p>Năm 1995,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/T%E1%BA%A1p_ch%C3%AD_Fortune\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">tạp chí Fortune</a>&nbsp;đã xếp Adobe là một trong những nơi làm việc lý tưởng. Năm 2003, Adobe đã được xếp thứ 5 trong những công ty tốt để làm việc ở Mỹ, năm 2004 là thứ 6, thứ 31 năm 2007 và năm 2008 là thứ 40.<a href=\"https://vi.wikipedia.org/wiki/T%E1%BA%ADp_%C4%91o%C3%A0n_Adobe#cite_note-4\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[4]</sup></a></p><p>Năm 2007 Adobe cũng được xếp thứ 9 trong danh sách những công ty phần mềm lớn nhất thế giới.<a href=\"https://vi.wikipedia.org/wiki/T%E1%BA%ADp_%C4%91o%C3%A0n_Adobe#cite_note-5\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[5]</sup></a></p>",
        "logo": "pr-1686575233601.jpg",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Shopee ",
        "address": "5 Science Park Drive, Shopee Building, Singapore 118265",
        "description": "<p><strong>Shopee</strong>&nbsp;là ứng dụng mua sắm trực tuyến và là sàn giao dịch&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C6%B0%C6%A1ng_m%E1%BA%A1i_%C4%91i%E1%BB%87n_t%E1%BB%AD\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">thương mại điện tử</a>&nbsp;có trụ sở đặt tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Singapore\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Singapore</a>, thuộc sở hữu của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Sea_Ltd\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Sea Ltd</a>&nbsp;(trước đây là&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Garena\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Garena</a>), được thành lập vào năm 2009 bởi&nbsp;<a href=\"https://vi.wikipedia.org/wiki/L%C3%BD_Ti%E1%BB%83u_%C4%90%C3%B4ng\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Lý Tiểu Đông</a>.<a href=\"https://vi.wikipedia.org/wiki/Shopee#cite_note-2\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[2]</sup></a>&nbsp;Shopee được giới thiệu lần đầu tại Singapore vào năm 2015, và hiện đã có mặt tại các quốc gia:&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Singapore\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Singapore</a>;&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Malaysia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Malaysia</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%C3%A0i_Loan\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Đài Loan</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C3%A1i_Lan\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Thái Lan</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Indonesia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Indonesia</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Vi%E1%BB%87t_Nam\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Việt Nam</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Philippines\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Philippines</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Brasil\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Brazil</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Ba_Lan\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Ba Lan</a>.<a href=\"https://vi.wikipedia.org/wiki/Shopee#cite_note-3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[3]</sup></a></p><p>Các bạn có thể làm công tác viên tiệp thị quảng cáo cùng với Shopee bằng cách , truy cập vào đường link http://senopaee.com để đăng ký .</p><p><br></p><h2>Lịch sử<span style=\"color: rgb(84, 89, 93);\">[</span><a href=\"https://vi.wikipedia.org/w/index.php?title=Shopee&amp;veaction=edit&amp;section=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">sửa</a><span style=\"color: rgb(84, 89, 93);\">&nbsp;|&nbsp;</span><a href=\"https://vi.wikipedia.org/w/index.php?title=Shopee&amp;action=edit&amp;section=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">sửa mã nguồn</a><span style=\"color: rgb(84, 89, 93);\">]</span></h2><p>Vào năm 2015, Shopee được ra mắt tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Singapore\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Singapore</a>&nbsp;với định hướng là sàn thương mại điện tử phát triển chủ yếu trên thiết bị di động,<a href=\"https://vi.wikipedia.org/wiki/Shopee#cite_note-4\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[4]</sup></a>&nbsp;hoạt động như một mạng xã hội phục vụ nhu cầu mua bán mọi lúc, mọi nơi cho người dùng. Tích hợp hệ thống vận hành, giao nhận và hỗ trợ về khâu thanh toán, Shopee là bên trung gian giúp việc mua sắm trực tuyến dễ dàng và an toàn hơn cho cả bên mua lẫn bên bán.</p><p><br></p><h2>Mô hình kinh doanh<span style=\"color: rgb(84, 89, 93);\">[</span><a href=\"https://vi.wikipedia.org/w/index.php?title=Shopee&amp;veaction=edit&amp;section=2\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">sửa</a><span style=\"color: rgb(84, 89, 93);\">&nbsp;|&nbsp;</span><a href=\"https://vi.wikipedia.org/w/index.php?title=Shopee&amp;action=edit&amp;section=2\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">sửa mã nguồn</a><span style=\"color: rgb(84, 89, 93);\">]</span></h2><p>Mô hình ban đầu của Shopee là C2C Marketplace (trung gian trong quy trình mua bán giữa các cá nhân với nhau).<sup>[</sup><a href=\"https://vi.wikipedia.org/wiki/Wikipedia:Ch%C3%BA_th%C3%ADch_ngu%E1%BB%93n_g%E1%BB%91c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup><em>cần dẫn nguồn</em></sup></a><sup>]</sup>&nbsp;Tuy nhiên, hiện nay Shopee đã trở thành mô hình lai khi có cả B2C (doanh nghiệp đến người tiêu dùng). Shopee đã tính phí của người bán / hoa hồng và phí đăng bán sản phẩm.</p><p><br></p><h2>Thị phần<span style=\"color: rgb(84, 89, 93);\">[</span><a href=\"https://vi.wikipedia.org/w/index.php?title=Shopee&amp;veaction=edit&amp;section=3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">sửa</a><span style=\"color: rgb(84, 89, 93);\">&nbsp;|&nbsp;</span><a href=\"https://vi.wikipedia.org/w/index.php?title=Shopee&amp;action=edit&amp;section=3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">sửa mã nguồn</a><span style=\"color: rgb(84, 89, 93);\">]</span></h2><p>Tính đến năm 2017, nền tảng này đã ghi nhận 80 triệu lượt tải ứng dụng, tại Việt Nam là hơn 5 triệu lượt.<a href=\"https://vi.wikipedia.org/wiki/Shopee#cite_note-5\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[5]</sup></a>&nbsp;Sàn này hiện đang làm việc với hơn bốn triệu nhà cung cấp với hơn 180 triệu sản phẩm. Cũng trong quý 4 năm 2017, tổng giá trị hàng hóa của Shopee được báo cáo đạt 1,6 tỷ đô la Mỹ, tăng 206% so với năm trước.<a href=\"https://vi.wikipedia.org/wiki/Shopee#cite_note-6\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[6]</sup></a>&nbsp;Tuy nhiên, tình trạng thua lỗ ở tập đoàn mẹ là SEA group cũng tăng đáng kể. Tập đoàn này ghi nhận khoản lỗ ròng 252 triệu USD trong quý 4/2017, tăng 306% so với mức lỗ ròng 62 triệu USD của quý 4/2016</p>",
        "logo": "shopee-1686575294231.png",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Tiki",
        "address": "52 Út Tịch, Phường 4, Tân Bình, Thành phố Hồ Chí Minh",
        "description": "<p><strong>Tiki</strong>&nbsp;là viết tắt của “Tìm kiếm &amp; Tiết kiệm”, là tên của website&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C6%B0%C6%A1ng_m%E1%BA%A1i_%C4%91i%E1%BB%87n_t%E1%BB%AD\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">thương mại điện tử</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Vi%E1%BB%87t_Nam\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Việt Nam</a>. Thành lập từ tháng 3 năm 2010<a href=\"https://vi.wikipedia.org/wiki/Tiki#cite_note-2\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[2]</sup></a>, Tiki hiện đang là trang thương mại điện tử lọt top 2 tại Việt Nam và top 6 tại khu vực&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%C3%B4ng_Nam_%C3%81\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Đông Nam Á</a>.</p><h2>Lịch sử</h2><p>Khởi đầu của Tiki chỉ là một&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Website\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">website</a>&nbsp;bán sách trực tuyến. Tháng 3 năm 2012,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Qu%E1%BB%B9_%C4%91%E1%BA%A7u_t%C6%B0\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Quỹ đầu tư</a>&nbsp;CyberAgent Ventures Inc đã quyết định đầu tư vào Tiki<a href=\"https://vi.wikipedia.org/wiki/Tiki#cite_note-3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[3]</sup></a>. Với việc đầu tư này, Tiki dần mở rộng thành một sàn thương mại điện tử.</p><p>Giai đoạn năm 2011 – 2012, Tiki trở thành đơn vị kinh doanh sách hàng đầu tại Việt Nam.</p><p>Giai đoạn năm 2013 – 2014, Tiki mở rộng lĩnh vực kinh doanh với rất nhiều ngành hàng khác. Lúc này, ngoài hơn 51.000 đầu sách thì người mua hàng có thể tìm thấy các mặt hàng từ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/V%C4%83n_ph%C3%B2ng_ph%E1%BA%A9m\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">văn phòng phẩm</a>, nhu yếu phẩm đến điện tử, điện gia dụng,… ở Tiki. Ở giai đoạn này, Tiki bắt đầu đưa vào hoạt động hết công sức nhà kho diện tích rộng lên đến 3.000m2, bắt đầu chiếm lĩnh thị trường thương mại điện tử đang phát triển thần tốc ở Việt Nam.</p><p><br></p><p>Năm 2015, Tiki lọt top 5 website thương mại điện tử nổi bật nhất tại Việt Nam, đánh dấu tên tuổi và minh chứng cho sức ảnh hưởng của Tiki trên thị trường thương mại điện tử cũng như đối với người tiêu dùng Việt Nam.</p><p>Năm 2016, Tiki vươn lên trở thành công ty thương mại điện tử lớn thứ 2 Việt Nam, có mặt ở&nbsp;<a href=\"https://vi.wikipedia.org/wiki/T%E1%BB%89nh_th%C3%A0nh_Vi%E1%BB%87t_Nam\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">63 tỉnh thành</a>&nbsp;trên khắp cả nước.</p><p>Tháng 4 năm 2017 sau 7 năm thành lập, Tiki đánh dấu bước chuyển mình khi chuyển sang hình thức&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Marketplace&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Marketplace</a><a href=\"https://vi.wikipedia.org/wiki/Tiki#cite_note-4\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[4]</sup></a>, thu hút thêm nhà bán hàng gia nhập hệ thống website của Tiki.vn, mở rộng lên hàng chục ngành hàng với hơn 300.000 sản phẩm được bày bán.</p><p>Vào tháng 6 năm 2020, Tiki đã huy động được khoảng 130 triệu USD từ một vòng tài trợ do công ty cổ phần tư nhân Northstar Group<a href=\"https://vi.wikipedia.org/wiki/Tiki#cite_note-5\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[5]</sup></a>&nbsp;có trụ sở tại&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Singapore\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Singapore</a>&nbsp;dẫn đầu. Ban đầu dự kiến chỉ huy động được 75 triệu&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%C3%B4_la_M%E1%BB%B9\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">USD</a>&nbsp;nhưng sau đó vòng gọi vốn được tăng quy mô nhờ sự hỗ trợ từ các nhà đầu tư Thương mại điện tử khởi nghiệp&nbsp;<a href=\"https://vi.wikipedia.org/wiki/H%C3%A0n_Qu%E1%BB%91c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Hàn Quốc</a>.</p><p><br></p><p>Với tốc độ tăng trưởng bình quân 30%, thị trường thương mại điện tử Việt Nam dự báo đạt 15 tỷ đô trong năm 2020 và nếu duy trì tốc độ tăng trưởng như hiện nay, con số doanh thu sẽ lên tới 33 tỷ USD vào năm 2025, xếp thứ ba trong khu vực&nbsp;<a href=\"https://vi.wikipedia.org/wiki/ASEAN\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">ASEAN</a>, sau&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Indonesia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Indonesia</a>&nbsp;(100 tỷ USD) và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C3%A1i_Lan\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Thái Lan</a>&nbsp;(43 tỷ USD).<sup>[</sup><a href=\"https://vi.wikipedia.org/wiki/Wikipedia:Ch%C3%BA_th%C3%ADch_ngu%E1%BB%93n_g%E1%BB%91c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup><em>cần dẫn nguồn</em></sup></a><sup>]</sup></p>",
        "logo": "tiki-1686575455267.jpg",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Tiktok",
        "address": "China",
        "description": "<p><strong>TikTok</strong>&nbsp;là nền tảng&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Video\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">video</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C3%82m_nh%E1%BA%A1c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">âm nhạc</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/D%E1%BB%8Bch_v%E1%BB%A5_m%E1%BA%A1ng_x%C3%A3_h%E1%BB%99i\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">mạng xã hội</a>&nbsp;của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Trung_Qu%E1%BB%91c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Trung Quốc</a>&nbsp;<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-:1-2\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[2]</sup></a>&nbsp;được ra mắt vào năm 2017, dành cho các thị trường bên ngoài Trung Quốc.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[3]</sup></a>&nbsp;bởi&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Tr%C6%B0%C6%A1ng_Nh%E1%BA%A5t_Minh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Trương Nhất Minh</a>, người sáng lập của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/ByteDance\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">ByteDance</a>.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-4\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[4]</sup></a>&nbsp;Nó được sử dụng để tạo các video ca nhạc ngắn,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Nh%C3%A9p_m%C3%B4i\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">hát nhép</a>, khiêu vũ, hài kịch và tài năng từ 3 giây đến 10 phút,<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-5\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[5]</sup></a><a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-6\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[6]</sup></a>&nbsp;và các video lặp lại ngắn từ 3 đến 60 giây.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-7\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[7]</sup></a>&nbsp;ByteDance lần đầu tiên ra mắt&nbsp;<strong>Douyin</strong>&nbsp;(<em>đẩu âm</em>) cho thị trường Trung Quốc vào tháng 9 năm 2016. Sau đó, TikTok đã được ra mắt vào năm 2017 cho&nbsp;<a href=\"https://vi.wikipedia.org/wiki/IOS\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">iOS</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Android_(h%E1%BB%87_%C4%91i%E1%BB%81u_h%C3%A0nh)\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Android</a>&nbsp;ở hầu hết các thị trường bên ngoài&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Trung_Qu%E1%BB%91c_%C4%91%E1%BA%A1i_l%E1%BB%A5c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Trung Quốc đại lục</a>; tuy nhiên, nó chỉ có sẵn trên toàn thế giới, bao gồm cả&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Hoa_K%E1%BB%B3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Hoa Kỳ</a>, sau khi hợp nhất với Musical.ly vào ngày 2 tháng 8 năm 2018.</p><p><br></p><p>TikTok và Douyin có giao diện người dùng gần như giống nhau nhưng không có quyền truy cập nội dung của nhau. Mỗi máy chủ của họ đều dựa trên thị trường có sẵn ứng dụng tương ứng.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-8\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[8]</sup></a>&nbsp;Ngoài trụ sở chính của&nbsp;<a href=\"https://vi.wikipedia.org/wiki/ByteDance\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">ByteDance</a>&nbsp;tại Bắc Kinh, TikTok còn có các văn phòng toàn cầu, bao gồm ở&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Dublin\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Dublin</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Los_Angeles\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Los Angeles</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%C3%A0nh_ph%E1%BB%91_New_York\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Thành phố New </a></p><p><a href=\"https://vi.wikipedia.org/wiki/Th%C3%A0nh_ph%E1%BB%91_New_York\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">York</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Lu%C3%A2n_%C4%90%C3%B4n\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">London</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Paris\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Paris</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Berlin\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Berlin</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Dubai\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Dubai</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Mumbai\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Mumbai</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Singapore\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Singapore</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Jakarta\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Jakarta</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Seoul\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Seoul</a>&nbsp;và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Tokyo\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Tokyo</a>.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-9\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[9]</sup></a>&nbsp;Kể từ khi ra mắt vào năm 2016, TikTok / Douyin nhanh chóng trở nên phổ biến ở&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%C3%B4ng_%C3%81\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Đông Á</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Nam_%C3%81\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Nam Á</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%C4%90%C3%B4ng_Nam_%C3%81\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Đông Nam Á</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Hoa_K%E1%BB%B3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Hoa Kỳ</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Th%E1%BB%95_Nh%C4%A9_K%E1%BB%B3\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Thổ Nhĩ Kỳ</a>,&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Nga\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Nga</a>&nbsp;và các khu vực khác trên thế giới.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-10\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[10]</sup></a><a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-11\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[11]</sup></a><a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-12\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[12]</sup></a>&nbsp;Tính đến tháng 8 năm 2020, TikTok, ngoại trừ Douyin, đã vượt qua 1 tỷ người dùng trên toàn thế giới trong vòng chưa đầy bốn năm.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-13\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[13]</sup></a>&nbsp;Tính đến tháng 4 năm 2020, Douyin có khoảng 500 triệu người dùng hoạt động hàng tháng.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-14\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[14]</sup></a><a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-15\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[15]</sup></a></p><p><sup style=\"color: rgb(51, 102, 204);\"></sup></p><p>Kể từ tháng 6 năm 2020,&nbsp;<a href=\"https://vi.wikipedia.org/w/index.php?title=Kevin_A._Mayer&amp;action=edit&amp;redlink=1\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(221, 51, 51);\">Kevin Mayer</a>&nbsp;là Giám đốc điều hành của TikTok và COO của công ty mẹ ByteDance.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-16\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[16]</sup></a>&nbsp;Trước đây, ông là chủ tịch của Walt Disney Direct-to-Consumer &amp; International.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-17\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[17]</sup></a>&nbsp;Vào ngày 3 tháng 8 năm 2020, Tổng thống Hoa Kỳ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Donald_Trump\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Donald Trump đã</a>&nbsp;đe dọa sẽ cấm TikTok tại Hoa Kỳ vào ngày 15 tháng 9 nếu các cuộc đàm phán để công ty được mua lại bởi&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Microsoft\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Microsoft</a>&nbsp;hoặc một công ty \"rất Mỹ\" khác đã không thành công.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-18\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[18]</sup></a>&nbsp;Vào ngày 6 tháng 8, Trump đã ký hai lệnh hành pháp cấm \"giao dịch\" của Hoa Kỳ với TikTok và&nbsp;<a href=\"https://vi.wikipedia.org/wiki/WeChat\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">WeChat</a>&nbsp;với công ty mẹ của nó, ByteDance, có hiệu lực sau 45 ngày kể từ ngày ký.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-:11-19\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[19]</sup></a>&nbsp;Nó đã bị chính phủ&nbsp;<a href=\"https://vi.wikipedia.org/wiki/%E1%BA%A4n_%C4%90%E1%BB%99\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">Ấn Độ</a>&nbsp;cấm kể từ tháng 6 năm 2020 cùng với các ứng dụng khác của Trung Quốc để đối phó với&nbsp;<a href=\"https://vi.wikipedia.org/wiki/Giao_tranh_Trung_Qu%E1%BB%91c%E2%80%93%E1%BA%A4n_%C4%90%E1%BB%99_2020\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\">cuộc đụng độ biên giới</a>&nbsp;với Trung Quốc.<a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-india_ban-20\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[20]</sup></a><a href=\"https://vi.wikipedia.org/wiki/TikTok#cite_note-21\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(51, 102, 204);\"><sup>[21]</sup></a></p><h2><br></h2><p><br></p>",
        "logo": "tiktok-1686575523674.jpg",
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }]


export const INIT_JOB =
    [{
        "name": "Manual Tester - Khối CNTT",
        "skills": [
            "REACT.JS",
            "TYPESCRIPT"
        ],
        "company": {
            "_id": "64871701c7573fac797f83ea",
            "name": "Amazon.com, Inc",
            "logo": "amzon-1686574798358.jpg"
        },
        "location": "HANOI",
        "salary": 15000000,
        "quantity": 10,
        "level": "FRESHER",
        "description": "<h2>3 Lý Do Để Gia Nhập Công Ty</h2><ul><li>Mức lương cạnh tranh, hấp dẫn</li><li>Môi trường làm việc chuyên nghiệp, thân thiện</li><li>Được làm việc với các hệ thống hiện đại, tiên tiến</li></ul><p><br></p><h2>Mô Tả Công Việc</h2><ul><li>&nbsp;Tiếp nhận các yêu cầu kiểm thử các sản phẩm, dịch vụ CNTT</li><li>Thực hiện tìm hiểu, phân tích và làm rõ yêu cầu. Xây dựng chiến lược kiểm thử cho yêu cầu sản phẩm, dịch vụ CNTT</li><li>Xây dựng kế hoạch kiểm thử, viết kịch bản, tạo báo cáo kiểm thử, báo cáo lỗi kiểm thử. Xây dựng tài liệu cho các yêu cầu sau khi đã thực hiện</li><li>Điều phối công việc trong nhóm từ 4-10 nhân sự</li><li>Thực hiện kiểm thử, đánh giá chất lượng sản phẩm&nbsp;</li><li>Phân tích /đánh giá nguyên nhân lỗi sau golive</li></ul><p><br></p><h2>Yêu Cầu Công Việc</h2><ul><li>Tốt nghiệp hệ chính quy các Trường Đại học trong nước hoặc nước ngoài</li><li>Chuyên ngành đào tạo: Công nghệ thông tin, Toán tin, Điện tử Viễn thông, Kế Toán, Tài chính Ngân hàng...</li><li>Có trên 3&nbsp;năm kinh nghiệm trong công tác kiểm thử trong ngân hàng, Tổ chức Tài chính, Công ty về CNTT</li><li>Có kinh nghiệm làm việc với Agile/Scrum</li><li>Có kiến thức tổng quan về ngân hàng và am hiểu nghiệp vụ ngân hàng</li><li>Có hiểu biết sâu, rộng về hoạt động kiểm thử phần mềm</li><li>Có kinh nghiệm kiểm thử phần mềm với Android và IOS</li><li>Có chứng chỉ&nbsp;đào tạo về kiểm thử là 1 lợi thế</li><li>Có kinh nghiệm trong công tác kiểm thử tự động là 1 lợi thế</li><li>Có kinh nghiệm quản lý nhóm</li><li>Kỹ năng phân tích tài liệu, yêu cầu, báo cáo, viết tài liệu tốt</li><li>Kỹ năng tư duy/logic tốt, giao tiếp, thuyết trình, thuyết phục</li><li>Tiếng Anh tốt, có thể làm việc trực tiếp với các đối tác nước ngoài là một lợi thế</li></ul><p><br></p><h2>Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây</h2><ul><li>Mức lương cạnh tranh, hấp dẫn (Thưởng xếp loại thực hiện công việc 6 tháng/lần, thưởng sinh nhật ngân hàng, thưởng các ngày lễ tết trong năm…).</li><li>Chế độ phúc lợi cạnh tranh: Du lịch hàng năm, Khám sức khỏe định kì hàng năm; Gói bảo hiểm sức khỏe; Các hoạt động tri ân, chăm lo đời sống tinh thần CBNV và Thân nhân...</li><li>Môi trường làm việc chuyên nghiệp, thân thiện, cởi mở.</li><li>Được làm việc với các hệ thống hiện đại, tiên tiến nhất thị trường, áp dụng các công nghệ hàng đầu về an ninh bảo mật để đảm bảo an toàn cho người sử dụng.</li><li>Cơ hội học hỏi nghiệp vụ ngân hàng.</li></ul>",
        "startDate": "2023-05-28T14:00:00.000Z",
        "endDate": "2023-07-07T14:00:00.000Z",
        "isActive": true,
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null,
        "updatedBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        }
    }, {
        "name": "eCommerce Project Manager/Tester (Magento)",
        "skills": [
            "NEST.JS",
            "BACKEND",
            "FULLSTACK"
        ],
        "company": {
            "_id": "64871777c7573fac797f83f6",
            "name": "Apple Inc.",
            "logo": "apple-1686574900663.jpg"
        },
        "location": "HOCHIMINH",
        "salary": 25000000,
        "quantity": 10,
        "level": "MIDDLE",
        "description": "<h2>Mô Tả Công Việc</h2><p><br></p><p><strong>About Digital Outlook</strong></p><ul><li>Digital Outlook is a strategy, user experience and development agency with a focus on creating engaging brand experiences that convert.</li><li>We work as partners with local and global brands based in Australia spanning services such as eCommerce, B2B, retail and consumer industries to deliver products, services, platforms and solutions that people love to use across multi channels.</li><li>With our head office based in Melbourne (Australia), our Hanoi office is a critical part of the business, with a highly experienced and dedicated team responsible for the technical scoping, delivery and maintenance of all of our projects.</li><li>Digital Outlook is set-up as a registered office in Vietnam, with all staff paid via payroll and local taxes, insurances allocated each quarter and a summer holiday for all employees.</li></ul><p><br></p><p><strong>The Position</strong></p><ul><li>A unique opportunity for an experienced Magento Project Manager/Tester to join the Digital Outlook team and work directly with a large Australian customer, as a dedicated member of their team.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li><li>Based in our Hanoi office, you will act as a remote resource and report directly to the Melbourne Head Office of the retailer, while being supported by the development team at the Hanoi Digital Outlook office.</li><li>The role will assist in the successful delivery of all eCommerce projects both B2B and B2C, as well as any ongoing website maintenance across at least three Adobe Commerce websites. You will be the first point of contact for the retail group and facilitate and manage the various website requirements through the Digital Outlook team.</li><li>The position requires a clear understanding of the Adobe Commerce platform and eCommerce operations. The role will assist in general problem solving, raising Jira tickets and be an overall systems expert when it comes to the Adobe Commerce platform.</li><li>You will have strong written communication and organisational skills and will be responsible for maintaining, closing and the escalation of Jira tickets to the Digital Outlook development team.</li><li>The position requires a clear understanding of our clients businesses, goals and problems and of the technologies that their websites are built on.</li></ul><p><br></p><h2>Yêu Cầu Công Việc</h2><p><br></p><p><strong>Project Management/Testing Requirements</strong></p><ul><li>You’ll be the main point of contact between the retailer and the development team at Digital Outlook, taking briefs and managing all development work on the Adobe Commerce platforms</li><li>Day-to-day management of the websites, assisting the retailer with common tasks such as product and content updates, setting up campaigns and promotions and general configurations</li><li>Ensure projects are carried out in accordance with our development methodology</li><li>Ensure the appropriate people are resourced on your projects</li><li>As the primary tester, effectively troubleshoot issues, determining the cause and managing the resolution process with the client and internal team (if required)&nbsp;</li><li>Writing training documentation and facilitating client training sessions</li><li>Accounting for your time and accurately completing your timesheets</li><li>Demonstrate an interest in current technology and future trends</li></ul><p><br></p><p><strong>Your Skills</strong></p><ul><li>A minimum of three years of experience with Magento 2/Adobe Commerce in a Project Management and Testing capacity</li><li>Ability to juggle multiple projects and clients</li><li>Ability to accurately estimate, manage and measure projects</li><li>Ability to work well under pressure, solve problems, manage workflows and meet deadlines</li><li>Demonstrated high level written and verbal communication skills in English</li><li>A positive and honest attitude</li></ul><p><br></p><h2>Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây</h2><p><strong>Why You'll Love Working Here</strong></p><ul><li>Extremely Attractive Salary</li><li>No overtime</li><li>Join a young, passionate, energetic team with friendly colleagues</li><li>Opportunities to improve English within an international team</li><li>High health insurance package&nbsp;</li><li>Offer training &amp; English courses</li><li>Vacation, team building events, bonus</li></ul><p><br></p>",
        "startDate": "2023-06-04T14:00:00.000Z",
        "endDate": "2023-07-07T14:00:00.000Z",
        "isActive": true,
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Technical Project Manager - Salary Up to $2500",
        "skills": [
            "NEST.JS",
            "REACT NATIVE",
            "TYPESCRIPT",
            "FULLSTACK"
        ],
        "company": {
            "_id": "648717bdc7573fac797f83fa",
            "name": "Google LLC",
            "logo": "google-1686574998397.png"
        },
        "location": "DANANG",
        "salary": 35000000,
        "quantity": 5,
        "level": "SENIOR",
        "description": "<h2>3 Lý Do Để Gia Nhập Công Ty</h2><ul><li>Global Exposure</li><li>Fast Track Career</li><li>Diversified Jobs &amp; Technologies</li></ul><p><br></p><h2>Mô Tả Công Việc</h2><ul><li>Work closely with stakeholders, architect for product development features and manage SDLC</li><li>Follow standard agile scrum practices for software development</li><li>Co-ordinate customer interactions and team interactions</li><li>To focus on Sprint Planning, Capacity Planning and translate to metrics of squad deliverables</li><li>Work with product owners to handle backlogs and new requests</li><li>Develop product roadmap and prioritize user stories along with Product Owner</li><li>Provide mentorship to team members in Agile frameworks</li><li>Manage each project’s scope and timeline</li><li>Coordinate sprints, retrospective meetings and daily stand-ups</li><li>Facilitate internal communication and effective collaboration</li><li>Be the point of contact for external communications (e.g. from customers or stakeholders)</li><li>Resolve conflicts and remove obstacles that occur</li><li>Help teams implement changes effectively</li><li>Ensure deliverables are up to quality standards at the end of each sprint</li><li>Guide development teams to higher scrum maturity</li><li>Help build a productive environment where team members ‘own’ the product and enjoy working on it</li></ul><p><br></p><h2>Yêu Cầu Công Việc</h2><ul><li>8+ years of experience Scrum Master or Managing the squad of software development team and .Net Framework developing experience is mandatory.</li><li>Familiarity with software development</li><li>Excellent knowledge of Scrum techniques and artifacts (such as definition of done, user stories, automated testing, backlog refinement)</li><li>Good knowledge of other Agile frameworks</li><li>Problem-solving and conflict-resolution ability</li><li>Experience in leading team of Engineers, full stack developers, allocate tasks and mentor the</li><li>team members to perform to their full potential</li><li>Experience in working with distributed agile development teams and product owner to design and implement product features</li><li>Excellent communication, servant leadership skills and teamwork skills</li><li>Scrum Master or SAFe Certified agilest certification would be huge plus</li></ul><p><br></p><h2>Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây</h2><ul><li>Competitive salary. Performance based award.</li><li>Young and dynamic working environment.</li><li>Continuous development of hard and soft skills through work and professional trainings.</li><li>Opportunity to approach newest technology trends</li><li>Exciting leisure: sport and art events (football club, family day…)</li><li>Company’s labor policy completely pursuant to Vietnamese labor legislation plus other benefits offered by the company (Company trip, Holiday, etc.)</li></ul><p><br></p>",
        "startDate": "2023-06-04T14:00:00.000Z",
        "endDate": "2023-07-01T14:00:00.000Z",
        "isActive": true,
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "BrSE - Bridge Engineer (Project Manager) ~ $2000",
        "skills": [
            "ANGULAR",
            "NEST.JS"
        ],
        "company": {
            "_id": "648717fac7573fac797f83fe",
            "name": "Lazada Việt Nam",
            "logo": "lazada-1686575062887.png"
        },
        "location": "OTHER",
        "salary": 50000000,
        "quantity": 5,
        "level": "SENIOR",
        "description": "<h2>3 Lý Do Để Gia Nhập Công Ty</h2><ul><li>Môi trường phát triển tiềm năng;</li><li>Có cơ hội trở thành \"Key Member\" của công ty.</li><li>Hưởng đầy đủ các chế độ đãi ngộ theo quy định</li></ul><p><br></p><h2>Mô Tả Công Việc</h2><ul><li>Là cầu nối giữa khách hàng Nhật Bản và đội dự án Offshore ở Việt Nam;</li><li>Làm việc trực tiếp với khách hàng Nhật Bản: Giao tiếp, thương lượng, nhận, phân tích các yêu cầu của dự án phần mềm, và truyền đạt cho đội dự án phần mềm ở Việt Nam;</li><li>Quản lý tình hình triển khai dự án và phối hợp với khách hàng trong việc quản lý dự án.</li></ul><p><br></p><h2>Yêu Cầu Công Việc</h2><p><strong>Must have:</strong></p><ul><li>Có tiếng Nhật từ N2 trở lên, và đã từng làm việc tại môi trường Nhật Bản;</li><li>Có từ 3 năm kinh nghiệm làm việc trong lĩnh vực Phát triển phần mềm và tối thiểu 2 năm trong vai trò PM.</li><li>Có kinh nghiệm lập trình, database;</li><li>Có kỹ năng làm việc nhóm tốt, phối hợp, gắn kết, lắng nghe và chia sẻ với cả thành viên trong dự án và đối tác; Đồng thời có khả năng làm việc độc lập</li><li>Có khả năng quản lý team, quản lý dự án;&nbsp;</li><li>Có khả năng lập kế hoạch và quản lý rủi ro; Chủ động, linh hoạt trong công việc</li></ul><p><br></p><p><strong>Nice to have:</strong></p><ul><li>Có thể sẵn sàng làm việc tại Nhật Bản trong tương lai</li><li>Nắm được ngôn ngữ lập trình phần mềm và kỹ năng phân tích kinh doanh là một lợi thế.&nbsp;</li><li>Có kiến thức về triển khai các app lên cloud như Azure;</li></ul><p><br></p><h2>Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây</h2><ul><li>Văn phòng mới, cơ sở vật chất hiện đại, được cấp máy tính riêng cấu hình cao&nbsp;&nbsp;</li><li>Mức lương khởi điểm hấp dẫn, xét tăng lương hàng năm<strong>&nbsp;(Mức lương upto 2000 USD);</strong></li><li>Có cơ hội trở thành&nbsp;<strong>“Key member”</strong>&nbsp;của công ty;</li><li>Thu nhập: Được hưởng tháng lương thứ 13/năm + Thưởng Tết và các dịp lễ khác,...</li><li>Nghỉ thứ 7, chủ nhật + nghỉ phép theo quy định của Pháp luật hiện hành;</li><li>Được tham gia vào bảo hiểm xã hội, bảo hiểm y tế theo quy định của Pháp luật hiện hành và quy định của Công ty.</li><li>Khám sức khỏe định kỳ 1 năm/ lần tại bệnh viện Quốc Tế Thu Cúc.&nbsp;</li><li>Được tham gia các hoạt động tập thể sôi nổi của công ty: Happy time mỗi thứ 6, Du lịch hàng năm, Teambuilding hàng quý, Gala cuối năm.&nbsp;</li><li>Làm việc 5 ngày / tuần&nbsp;&nbsp;(thứ 2- thứ 6, 8h30-17h30 không phải OT)</li></ul><p><br></p>",
        "startDate": "2023-06-04T14:00:00.000Z",
        "endDate": "2023-07-07T14:00:00.000Z",
        "isActive": true,
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "[Hybrid-HN] Bridge Software Engineer (BrSE)-Up to $3000",
        "skills": [
            "TYPESCRIPT",
            "JAVA",
            "FULLSTACK"
        ],
        "company": {
            "_id": "64871834c7573fac797f8402",
            "name": "Netflix Inc",
            "logo": "lazada-1686575062887.png"
        },
        "location": "HANOI",
        "salary": 50000000,
        "quantity": 2,
        "level": "SENIOR",
        "description": "<h2>3 Lý Do Để Gia Nhập Công Ty</h2><ul><li>Hybrid working</li><li>Great Benefit</li><li>Friendly Colleague</li></ul><p><br></p><h2>Mô Tả Công Việc</h2><ul><li>Gathering specific system domain knowledge and convey to the project working team in Vietnam;</li><li>Study requirements together with the development team and finalize requirements, design with clients.</li><li>Support PM or acting as PM to plan and monitor projects.</li><li>Become another quality gate for each deliverable.</li><li>Bridging in communication with Japanese customers on all project-related matters&nbsp;</li><li>Connecting business chances between Japan site and Vietnam site.</li></ul><p><br></p><h2>Yêu Cầu Công Việc</h2><ul><li>From 1- 3 years experience working as BrSE, N2 Japanese level.&nbsp;</li><li>Firm knowledge of software engineering disciplines, especially, requirement gathering &amp; analyzing, basic design, detail design.&nbsp;</li><li>Hand-on experiences &amp; knowledge in Web, Mobile, AI.&nbsp;</li><li>Excellent communication &amp; interpersonal skills with Japanese style business manner.&nbsp;</li><li>Highly responsible, loyal &amp; long-term commitment, High quality &amp; customer oriented mindset.&nbsp;</li><li>Strong analytical skills, problem-solving skills and the ability to pay careful attention to detail.</li></ul><p><br></p><h2>Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây</h2><ul><li>Attractive salary and bonus based on performance.</li><li>Salary review 2 times/year</li><li><strong>Hybrid working (2/5 days in office), flexible time</strong></li><li>Full benefits according to the Vietnam Labor Laws: social and health insurance</li><li>An international, professional, young but innovative and dynamic environment working closely with international experts and joining conferences and workshops on exciting new technologies.</li><li>Holidays based on Vietnamese labor law + paid vacations, Company trips, Team Building</li><li>Opportunity to be onsite in the Japan</li></ul><p><br></p>",
        "startDate": "2023-06-27T14:00:00.000Z",
        "endDate": "2023-07-26T14:00:00.000Z",
        "isActive": true,
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "IT communicator/ BridgeSE (English/Japanese N2/Chinese)",
        "skills": [
            "FRONTEND",
            "TYPESCRIPT"
        ],
        "company": {
            "_id": "64871862c7573fac797f8406",
            "name": "Adobe Photoshop",
            "logo": "photoshop-1686575180007.png"
        },
        "location": "HOCHIMINH",
        "salary": 30000000,
        "quantity": 3,
        "level": "MIDDLE",
        "description": "<h2>3 Lý Do Để Gia Nhập Công Ty</h2><ul><li>Enjoyable Team Environment</li><li>Engaging and Innovative Work</li><li>13th month Salary and Bonus</li></ul><p><br></p><h2>Mô Tả Công Việc</h2><ul><li>Understand the functional requirements and progress of the project, and follow up and coordinate with the Japanese manager, global team (China) and our Vietnamese team to see if there are any differences in perception between them, while providing interpretation.</li><li>Support communication between the global office team and the Vietnam office staff</li><li>プロジェクトの機能要件及び進捗状況を把握し、日本人マネージャーとグローバルチーム(主に中国)、ベトナム人チームとの間で相互の認識違いが出ていないかフォローアップし調整する.</li><li>グローバルオフィスチームとのベトナムオフィススタッフとのコミュニケーションをサポートする。</li></ul><p><br></p><h2>Yêu Cầu Công Việc</h2><ul><li>Excellent Japanese speaking, writing and reading skills (N2 level or higher with good communication skills)</li><li>Ability to understand system specifications and business written in Japanese and communicate them to the development team.</li><li>Experienced in the task of coordinating communication between Japanese customers and Japanese staff and Vietnamese staff in a software company.</li><li>A general understanding of the software development process.</li><li>Experience in testing Japanese language products and systems is appreciated.</li><li>Read and write English well (Some degree of communication with global teams required).</li><li>Chinese language ability is a big plus.</li><li>日本語のスピーキング、ライティング、リーディングに優れていること(N2レベル以上でコミュニケーション能力が高いこと)</li><li>日本語で書かれたシステム仕様書や業務を理解し、それを開発チームに伝える能力があること</li><li>ソフトウェア企業での日本人顧客及び日本人スタッフとベトナム人スタッフ間とのコミュニケーションを取り持つタスクに従事した経験を持つ方</li><li>ソフトウェア開発プロセスの大まかな理解&nbsp;</li><li>日本語のプロダクトやシステムをテストした経験があれば評価する</li><li>読み書き出来る程度の英語力 (グローバルチームとのコミュニケーションである程度必要)</li><li>中国語が出来れば尚良い</li></ul><p><br></p><h2>Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây</h2><p>WHY GRAPECITY? - TOP 10<strong> REASONS&nbsp;</strong></p><p><br></p><p>&nbsp;</p><ol><li>GrapeCity is a global, privately held corporation of 1,200 employees who share a single culture based on strong ethical principles. We have a 30 year history of consistent growth, success, and profitability.</li><li>Only the “A” team. You get only A-level players assigned to your project because we hire only the best. Our clients tell us that we communicate exceptionally well, and that our teams are talented, fast, and can be counted on to meet or exceed their expectations.</li><li>Focused on your needs. We are focused on serving the needs of the software product development market. We establish lasting relationships based on helping our clients succeed with their products and services.</li><li>Proven product development skills. Because of our experience developing our own industry-leading products and development tools, we understand what it takes to help others create successful, innovative software solutions and to bring them to market on schedule and within budget. With our experienced resources, we can also help you increase your available bandwidth.</li><li>Proven global delivery model. We were among the first to implement this model and have a deep understanding of how to apply it successfully. We have both American and Asian footprints and are only a phone call away.</li><li>Local success stories. We have referencible customers in every region of the world where our offices are and therefore you will always have someone local who you can connect with to find out how we helped them successfully achieve their business objectives.</li><li>Trusted by global brands. Our customer base also includes such well-known global corporations as Microsoft, Sony, Procter &amp; Gamble, Intel, Mitsubishi, AT&amp;T, Thomson, Syngenta, and Infosys.</li><li>Broad industry recognition. The successful, industry-leading solutions we have developed for our customers and ourselves have received many awards from Microsoft and others.</li><li>Maximum leverage of Microsoft technology. We are a Microsoft Gold Certified Partner and one of the few companies invited to sit on the Microsoft Office Advisory Board. We’ve been part of the Microsoft Early Adopter Partnership since the early 1980s. Our close relationship with Microsoft gives us the insight and experience to fully leverage the Microsoft .NET and Office frameworks in creating optimal solutions for our customers.</li><li>Our results speak for themselves. We can help you get the job done with outstanding results - and often in less time, at a lower cost, and with less risk than if you had to build your own “A” team and do it yourself.</li></ol><p><br></p><p>WHY GRAPECITY? – WE OF<strong>ER:</strong></p><p><br></p><ul><li>Flexible work hours in the morning between 8:00 AM - 9:00 AM</li><li>13th month salary before Tet holiday</li><li>Performance bonus on July based on the company profit result and staff performance results</li><li>Annual Health check-up by famous hospitals</li><li>Monthly lunch allowance: 850,000 VND</li><li>Annual summer vacation</li><li>Monthly team building budget</li><li>Comfortable and relaxing office setting with West Lake view</li><li>Free tea &amp; coffee corner</li><li>A variety of corporate events: sports competitions, monthly birthday parties, team building parties, Family Day party, Year End party.</li><li>12 paid annual leave days</li><li>Christmas Holiday on December 25</li><li>Occasional English classes with native instructors or GrapeSEED English trainner</li></ul>",
        "startDate": "2023-06-17T14:00:00.000Z",
        "endDate": "2023-07-07T14:00:00.000Z",
        "isActive": true,
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Remote Sr Front-End Dev (TypeScript, ReactJS, English)",
        "skills": [
            "REACT.JS",
            "REACT NATIVE",
            "FULLSTACK",
            "BACKEND"
        ],
        "company": {
            "_id": "64871896c7573fac797f840a",
            "name": "Tập đoàn Adobe ",
            "logo": "pr-1686575233601.jpg"
        },
        "location": "DANANG",
        "salary": 30000009,
        "quantity": 3,
        "level": "MIDDLE",
        "description": "<h2>3 Lý Do Để Gia Nhập Công Ty</h2><ul><li>Exciting and Diverse Projects</li><li>Collaborative and Supportive Team Environment</li><li>Personal and Professional Growth</li></ul><p><br></p><h2>Mô Tả Công Việc</h2><p>At Avalon Innovations, we are the creative minds behind cutting-edge web applications and digital products that serve a diverse range of industries, including e-commerce, insurance, travel, education, and healthcare. Based in Australia, we have a global reach, with our team members working remotely across various continents.</p><p>We are now on the lookout for seasoned Front-End Developers who are excited about the prospect of leveraging their skills on a diverse portfolio of global projects.</p><p><br></p><p>● Collaborate in the development, planning, and evaluation of technical tasks.</p><p>● Engage closely with our dynamic team and global clients.</p><p>● Develop and maintain client projects employing technologies such as React, Next.js, Shopify, TypeScript, and Node.js.</p><p>● Design and implement components aligning with the best industry practices and accessibility principles.</p><p>● Serve as a mentor and support for junior and intermediate developers.</p><p>● Contribute to our rigorous code review processes, helping to maintain high standards of code quality.</p><p><br></p><h2>Yêu Cầu Công Việc</h2><p><strong>What We Need from You:</strong></p><p>● Proficiency in spoken and written English (B2+).</p><p>● A minimum of 3 years of experience in front-end development, including a senior role.</p><p>● An ability to write clean, maintainable code comprehensible to other developers.</p><p>● In-depth understanding of TypeScript, React (Redux), and Next.js.</p><p>● Experience working with REST and GraphQL API protocols.</p><p>● Proficiency with Git and practical experience with CI / CD setups.</p><p>● Familiarity with Agile methodologies, with proficiency in Jira.</p><p>● Proven expertise in creating pixel-perfect layouts using SCSS and CSS-in-JS (emotion or styled-components).</p><p>● Experience in testing React components using Jest and Cypress.</p><p>● Knowledge of and experience implementing accessibility standards in development.</p><p>● Experience in developing services with Node.js, Express.js / Nest.js.</p><p>● Comfortability working with Linux systems and experience with Docker containers.</p><p><br></p><p><strong>Nice-to-have:</strong></p><p>● Experience with AWS services (S3, Lambda, ECS...).</p><p>● Proficiency with design systems and tools such as Figma / Adobe XD / Sketch.</p><p>● Experience with Shopify or similar e-commerce systems.</p><p>● Familiarity with Contentful / Sanity or similar headless content-management systems.</p><p><br></p><h2>Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây</h2><p><strong>Why Choose Avalon Innovations?</strong></p><p><br></p><p>● Work remotely in a distributed team - join us from anywhere in the world.</p><p>● Enjoy flexible scheduling for an optimal work-life balance.</p><p>● Practice and improve your English language skills in an international team.</p><p>● Benefit from paid professional training in modern front-end technologies.</p><p>● Enjoy 20 paid vacation days per year.</p><p>● Gain experience working with renowned international companies such as Toyota, Atlassian, Flight Centre, and Accenture.</p><p>● Get paid twice a month in USD, with salary reviews every 6 months.</p>",
        "startDate": "2023-05-28T14:00:00.000Z",
        "endDate": "2023-06-30T14:00:00.000Z",
        "isActive": true,
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Mid/Sr Frontend Developer (ReactJS, TypeScript)",
        "skills": [
            "REACT.JS",
            "REACT NATIVE",
            "FRONTEND",
            "TYPESCRIPT"
        ],
        "company": {
            "_id": "648718ccc7573fac797f840e",
            "name": "Shopee ",
            "logo": "shopee-1686575294231.png"
        },
        "location": "HANOI",
        "salary": 25000000,
        "quantity": 5,
        "level": "MIDDLE",
        "description": "<h2>3 Lý Do Để Gia Nhập Công Ty</h2><ul><li>Có nhiều cơ hội làm việc onsite ở Nhật Bản.</li><li>Được xét tăng lương 2 lần/năm</li><li>Lương tháng 13, thưởng lễ tết, thưởng dự án</li></ul><p><br></p><h2>Mô Tả Công Việc</h2><ul><li>Tham gia phân tích yêu cầu hệ thống&nbsp;</li><li>Thiết kế, phát triển và kiểm thử web application&nbsp;</li><li>Phối hợp với Project Manager và Bridge SE để giải quyết các vấn đề.&nbsp;</li><li>Mô tả tài liệu kỹ thuật&nbsp;</li><li>Đảm nhận code chính và review code cho thành viên khác&nbsp;</li><li>Hỗ trợ thành viên khác giải quyết vấn đề kỹ thuật&nbsp;</li><li>Hướng dẫn, định hướng cho freshers</li></ul><p><br></p><h2>Yêu Cầu Công Việc</h2><ul><li>Hơn 3 năm kinh nghiệm phát triển frontend, sử dụng React.js (React DOM, React Native).&nbsp;</li><li>Hơn 1 năm kinh nghiệm phát triển frontend, sử dụng TypeScript.&nbsp;</li><li>Có kinh nghiệm phát triển responsive websites, sử dụng thư viện UI (Ant Design, Material UI, Chakra UI) và CSS Preprocessor (SCSS, LESS)&nbsp;</li><li>Có kinh nghiệm viết unit tests và integration tests, sở hữu tư duy kiểm thử + kỹ thuật kiểm thử tốt (Jest, testing-library, Cypress, Detox).&nbsp;</li><li>Có kiến thức cứng về RESTful/GraphQL APIs.&nbsp;</li><li>Thành thạo các thư viện về quản lý chất lượng code (ESLint, Prettier).&nbsp;</li><li>Chú trọng vào tiểu tiết khi bố cục thành phần trên web.&nbsp;</li><li>Có khả năng chuyển hóa thiết kế wireframes (Figma) thành semantic HTML.&nbsp;</li><li>Có kinh nghiệm sử dụng Agile/Scrum, hiểu rõ nguyên lý về Agile.&nbsp;</li><li>Nhiệt tình, thân thiện, cộng tác với các team khác như BA/BE/QC.&nbsp;</li><li>Có khả năng đa nhiệm, làm việc độc lập, hỗ trợ thành viên khác thực hiện code reviews.&nbsp;</li></ul><p><br></p><p><strong>Khuyến khích có:&nbsp;</strong></p><ul><li>Có kinh nghiệm với các framework React: Next.js, Expo (native apps).&nbsp;</li><li>Có kinh nghiệm phát triển Backend (Firebase, Amplify, Java)&nbsp;</li><li>Có kinh nghiệm sử dụng CI/CD pipeline (Jenkins, Docker)&nbsp;</li><li>Có kiến thức vềdịch vụcloud (GCP, AWS)</li></ul><p><br></p><h2>Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây</h2><ul><li>Thời gian làm việc: Từ 08:00 đến 17:30 (Thứ 2 đến Thứ 6)&nbsp;</li><li>Thưởng các dịp lễ lớn của quốc gia, thưởng thành tích làm việc xuất sắc,..&nbsp;</li><li>Chính sách bảo hiểm xã hội, bảo hiểm y tế theo quy định của Nhà nước.&nbsp;</li><li>Môi trường làm việc trẻ trung, năng động, thân thiện.&nbsp;</li><li>Các hoạt động teambuilding quý, các sự kiện chung của công ty.&nbsp;</li><li>Cơ hội làm việc onsite tại Nhật Bản.&nbsp;</li><li>Thường xuyên tổ chức các seminar do chính nhân viên công ty thực hiện, tạo điều kiện nghiên cứu, trao đổi, phát triển.&nbsp;</li><li>Được hướng dẫn tận tình, tạo nhiều cơ hội phát triển, thăng tiến trong công việc.</li><li>Hỗ trợ tiền nhà ở trong bán kính 2km.&nbsp;</li><li>Hỗ trợ chi phí gửi xe và các tiện ích khác.</li></ul><p><br></p>",
        "startDate": "2023-05-28T14:00:00.000Z",
        "endDate": "2023-07-07T14:00:00.000Z",
        "isActive": true,
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Front-end coder",
        "skills": [
            "ANGULAR",
            "VUE.JS",
            "REACT.JS",
            "TYPESCRIPT"
        ],
        "company": {
            "_id": "6487197ec7573fac797f8414",
            "name": "Tiki",
            "logo": "tiki-1686575455267.jpg"
        },
        "location": "HOCHIMINH",
        "salary": 15000000,
        "quantity": 5,
        "level": "FRESHER",
        "description": "<h2>3 Lý Do Để Gia Nhập Công Ty</h2><ul><li>Great opportunity for career development</li><li>Young and international work environment</li><li>Flexible working hours</li></ul><p><br></p><h2>Mô Tả Công Việc</h2><p><strong>As a Front-end coder, you will:</strong></p><p>·&nbsp;Cooperate directly with the Head of Product Development</p><p>·&nbsp;Develop and maintain our web applications using ReactJS, JavaScript and TypeScript</p><p>·&nbsp;Collaborate with the design team to implement user-friendly interfaces</p><p>·&nbsp;Write clean, efficient, and well-documented code</p><p>·&nbsp;Participate in code reviews and maintain coding standards</p><p>·&nbsp;Optimize applications for maximum speed and scalability</p><p>·&nbsp;Stay up-to-date with emerging trends and technologies in frontend development</p><p>·&nbsp;Startup mind-set and strong responsibility, proactive.</p><p><br></p><h2>Yêu Cầu Công Việc</h2><p>·Bachelor's degree in Computer Science, Engineering or equivalent</p><p>·&nbsp;At least 2 years of experience in frontend development Proficient in ReactJS, JavaScript, and TypeScript</p><p>·&nbsp;Experience with responsive web design and cross-browser compatibility</p><p>·&nbsp;Familiarity with CSS frameworks such as Ant Design, Bootstrap or Material UI</p><p>·&nbsp;Experience in React Native or NodeJS is a plus.</p><p>·&nbsp;Knowledge of RESTful APIs and asynchronous programming</p><p>·&nbsp;Strong problem-solving skills and attention to detail</p><p>&nbsp;Excellent communication and teamwork skills&nbsp;</p><p><br></p><h2>Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây</h2><p>• You will be working in a professional and dynamic environment&nbsp;</p><p>• You will receive an attractive salary evaluated on skills and experience&nbsp;</p><p>• You will get great opportunities for career development&nbsp;</p><p>• You will work in a beautiful office in the heart of the city, in a great social environment&nbsp;</p><p>• You will get more annual leave and holidays than required by law&nbsp;</p><p>• Monthly happy lunch and daily afternoon tea with the company&nbsp;</p><p>• Annual team building company trip&nbsp;</p><p>• Flexible working hours and fair payment&nbsp;</p><p>• Being part of one of the most revolutionary and innovative projects for tomorrow’s world</p>",
        "startDate": "2023-05-28T14:00:00.000Z",
        "endDate": "2023-07-07T14:00:00.000Z",
        "isActive": true,
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }, {
        "name": "Junior Frontend ReactJS Dev (JavaScript, HTML, CSS)",
        "skills": [
            "FRONTEND",
            "TYPESCRIPT",
            "REACT.JS",
            "REACT NATIVE"
        ],
        "company": {
            "_id": "648719bdc7573fac797f8418",
            "name": "Tiktok",
            "logo": "tiktok-1686575523674.jpg"
        },
        "location": "HANOI",
        "salary": 17000000,
        "quantity": 5,
        "level": "JUNIOR",
        "description": "<h2>Mô Tả Công Việc</h2><p><strong>Xây dựng phân hệ front-end (giao diện người dùng) các tính năng được yêu cầu từ team phát triển sản phẩm cũng như từ người dùng, cụ thể:</strong></p><ul><li>Tham gia vào việc phát triển sản phẩm của công ty, lập trình front-end, chuyển các file thiết kế (PSD, Figma, Sketch, Invision,..) sang HTML, CSS, iOS, Android.</li><li>Bảo trì, nâng cấp cho front-end sản phẩm của công ty.</li><li>Nghiên cứu và áp dụng các công nghệ mới để tối đa hóa hiệu quả phát triển sản phẩm.</li><li>&nbsp;Phối hợp và hỗ trợ với team back-end một cách chủ động và chặt chẽ để nâng cao trải nghiệm người dùng trên từng điểm tiếp xúc.</li></ul><p><br></p><h2>Yêu Cầu Công Việc</h2><ul><li>Kinh nghiệm làm việc: tối thiểu 1 năm kinh nghiệm</li><li>Tốt nghiệp các trường Đại học, chuyên ngành CNTT, Điện tử, Viễn thông,...</li><li>Có hiểu biết về lập trình hướng đối tượng.</li><li>Hiểu biết về HTML / CSS / Javascript.</li><li>Thành thạo ReactJS</li><li>Có khả năng đọc hiểu tài liệu tiếng Anh.</li><li>Có khả năng làm việc độc lập và theo nhóm.</li><li>Cẩn thận, kiên nhẫn và ham học hỏi.</li><li>Sử dụng laptop cá nhân</li></ul><p><br></p><h2>Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây</h2><ul><li>Chế độ lương - thưởng: Mức lương cạnh tranh &amp; hấp dẫn, Lương tháng 13.</li><li>Đánh giá năng lực, xem xét điều chỉnh lương 1 lần 1 năm.</li><li>Thời gian làm việc: Từ thứ Hai đến thứ Sáu: 09h00 - 18h00.</li><li>Company trip, Team Building, Year end party, Party team hàng tháng đi ăn nhậu với nhau (được công ty hỗ trợ.)</li><li>Mỗi tháng có meeting tổng kết kinh doanh, ăn uống, giao lưu với nhân viên mới.</li><li>Tham gia các nhóm thể thao của công ty: Đá banh, cầu lông.</li><li>Môi trường làm việc mở, sẵn sàng đón nhận ý kiến từ tất cả nhân viên, thân thiện, năng động, đa dạng và thăng tiến.</li></ul><p><br></p>",
        "startDate": "2023-05-28T14:00:00.000Z",
        "endDate": "2023-07-07T14:00:00.000Z",
        "isActive": true,
        "createdBy": {
            "_id": "647b5108a8a243e8191855b5",
            "email": "hoidanit@gmail.com"
        },
        "isDeleted": false,
        "deletedAt": null
    }]


