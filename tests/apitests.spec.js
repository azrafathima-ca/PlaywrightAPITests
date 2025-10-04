import {test,expect} from '@playwright/test';

test('API Tests to get list of users', async ({request}) => {
// ...existing code...
const response = await request.get('https://reqres.in/api/users?page=2', {
    headers: {
               'x-api-key':'reqres-free-v1',
               'Accept': 'application/json'
        }
});
// ...existing code...
await expect(response.status()).toBe(200);
const data = await response.json();
console.log(data)  
})

test('API Tests to get single user', async ({request}) => {
const response = await request.get('https://reqres.in/api/users/2', {
    headers: {
               'x-api-key':'reqres-free-v1',
             
               'Accept': 'application/json'
        }
});
await expect(response.status()).toBe(200);
const data =await response.json();
console.log(data)
})

test('API Tests to create a user', async ({ request }) => {
    
    const response = await request.post('https://reqres.in/api/users', {
        
       
        headers: {
               'x-api-key':'reqres-free-v1',
             
               'Accept': 'application/json'
        }
        ,           
        data: {
            name: 'Azra Dev',
            job: 'Software QA Engineer'
        }

    });
    
    await expect(response.status()).toBe(201);
    const data = await response.json();
    expect(data).toHaveProperty('name', data.name);
    expect(data).toHaveProperty('job', data.job);
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('createdAt');
    console.log(data);
});

test('API Tests to update a user', async ({ request }) => { 
   
    const response = await request.put('https://reqres.in/api/users/482', {         
        
        headers: {
               'x-api-key':'reqres-free-v1',
             
               'Accept': 'application/json'
        },           
        data: {
            name: 'Azra Damash',
            job: 'Software QA Engineer'
        }

    });
    
    await expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('name', data.name);
    expect(data).toHaveProperty('job', data.job);
    expect(data).toHaveProperty('updatedAt');
    console.log(data);
}
);
test('API Tests to update a user with PATCH', async ({ request }) => {

    const response = await request.patch("https://reqres.in/api/users/482", {
    headers:
    {
        'x-api-key':'reqres-free-v1',
        'Accept': 'application/json'
    },
    data:{
        name:'Amara Khan',
        job:'Software QA Automation Engineer'
    }
    }) 
;
    await expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('name',data.name);
    expect(data).toHaveProperty('job',data.job);
    expect(data).toHaveProperty('updatedAt'); 

    console.log(data);  
});

test('API test to delete a user',async({request})=>{
    const response=await request.delete('https://reqres.in/api/users/482',
    
{
    headers:
    {
        'x-api-key':'reqres-free-v1',
        'Accept': 'application/json'
    },
    data:{
        name:'Amara Khan',
        job:'Software QA Automation Engineer'           

    }
})
await expect(response.status()).toBe(204); 
// 204 No Content for successful deletion
// Should be empty as the response body is empty for 204 status
})


