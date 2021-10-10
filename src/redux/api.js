export const getWeathers = () => 
        //fetch("https://jsonplaceholder.typicode.com/users");
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=971aa2c3e7e3c24a9d34b4f0d2bdf88b&cnt=40");