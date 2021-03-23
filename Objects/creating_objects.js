const personal_info=
{
	name: `Vasvi`,
	Fullname: `Vasvi Sood`,
	year: 2,
    hobby: 'writing',
    friends: ['a','k','j','k'],

};
//console.log(personal_info.name);
// const prop=`name`;
// console.log(personal_info);

// console.log(personal_info[prop]);
// console.log(personal_info[`Full`+prop]);

const input=prompt('What do you wanna know about me?');
alert(`So here's the secret: ${personal_info[input]}`)

