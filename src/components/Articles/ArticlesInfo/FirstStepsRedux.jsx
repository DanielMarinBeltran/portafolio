import { Box, Typography } from '@mui/material';
import React from 'react';
import reduxDependecies from '../../../assets/imgs/reduxDependecies.png';
import folderReduxStorejs from '../../../assets/imgs/folderReduxStorejs.png';
import exampleReducers from '../../../assets/imgs/exampleReducer.png';
import reducersSetUp from '../../../assets/imgs/reducersSetUp.png';
import storeSetUp from '../../../assets/imgs/storeSetUp.png';
import wrapAppJs from '../../../assets/imgs/wrapappjs.png';
import typesExample from '../../../assets/imgs/typesExample.png';
import typesImportReducer from '../../../assets/imgs/importTypesReducer.png';
import switchReducer from '../../../assets/imgs/switchReducer.png';
import importTypesAction from '../../../assets/imgs/importTypesAction.png';
import codeAction from '../../../assets/imgs/codeAction.png';
import codeSuccessAction from '../../../assets/imgs/codeSuccessAction.png';
import codeErrorAction from '../../../assets/imgs/codeErrorAction.png';
import importAction from '../../../assets/imgs/importAction.png';
import dispatchAssing from '../../../assets/imgs/dispatchAssign.png';
import exampleFunction from '../../../assets/imgs/exampleFunction.png';
import exampleUseSelector from '../../../assets/imgs/exampleUseSelector.png';
import './firstStepsRedux.scss';

function FirstStepsRedux() {
	return (
		<div className="container">
			<Box className="title-container">
				<Typography variant="h1">First Steps with Redux</Typography>
				<Box>
					<Typography>Tags:</Typography>
					<Typography>React</Typography>
					<Typography>Redux</Typography>
				</Box>
			</Box>
			<Box>
				<Typography variant="h5" className="subtitle">
					Using Redux in React
				</Typography>
				<Typography className="paragraph">
					The first that we have to do is setting up Redux, we will open the terminal and install the
					following dependecies:
				</Typography>
				<Box className="img__size">
					<img
						className="image-command"
						style={{ width: '300px' }}
						src={reduxDependecies}
						alt="Redux Dependecies"
					/>
				</Box>
				<Typography className="paragraph
">
					<b>Redux</b> is a library as it says from Redux.
				</Typography>
				<Typography className="paragraph">
					<b>React-redux</b> is the library that has functions to connect our App of create-react-app with
					redux.
				</Typography>
				<Typography className="paragraph">
					<b>Redux-thunk</b> is a way to use async functions in redux.
				</Typography>
				<Typography className="paragraph">
					After we have installed all the dependecies we can proceed to create a folder named redux in the src
					folder and, then create the file named <b>store.js</b> and a folder named <b>reducers</b> (inside of
					this folder we will create a file named <b>index.js</b>, here is where we will create the reducers
					that we will use in every segment of our App) also a folder named <b>types</b> (inside of this
					folder we will create a file named <b>index.js</b>), and a last one named <b>actions</b> as the
					picture bellow.
				</Typography>
				<Box className="img__size">
					<img style={{ width: '300px' }} src={folderReduxStorejs} alt="folder redux storejs" />
				</Box>
				<Typography className="paragraph">
					In the reducers folder is where we will create our reducers, in this example we will create one
					(RecipesReducer.js).
				</Typography>
				<Box className="img__size">
					<img src={exampleReducers} style={{ width: '300px' }} alt="example reducers" />
				</Box>
				<Typography className="paragraph">
					Inside of the reducers folder in the file named index.js we will import a library that will allow us
					to unite the reducers created as the picture bellow.
				</Typography>
				<Box className="img__size">
					<img style={{ width: '80%' }} src={reducersSetUp} alt="set up reducers" />
				</Box>
				<Typography className="paragraph">
					After this we will go to the <stron>store.js</stron> created previously and we will add the
					following code, we could say that this code is default.
				</Typography>
				<Box className="img__size">
					<img src={storeSetUp} style={{ width: '80%' }} alt="store set up" />
				</Box>
				<Typography className="paragraph">
					After this we will go to the <b>App.js</b> and we will import provider from redux and the{' '}
					<b>store.js</b> and we will wrap our app, like the picture bellow.
				</Typography>
				<Box className="img__size">
					<img src={wrapAppJs} style={{ width: '80%' }} alt="wrap appjs" />
				</Box>
				<Typography variant="h5" className="subtitle">
					How does the reducer works?
				</Typography>
				<Typography className="paragraph">
					The reducer is a function that takes a initial state, an then it receives an action, and it will
					return a new state. The reducer uses a <b>switch</b> to identify what case is the one that it will
					execute, depending of the action that it will receive, for this we have the folder <b>types</b> and
					inside of it the file named <stron>index.js</stron>, it will have the types of actions that will be
					executed to identify the code. Inside of the <b>index.js</b> we will write tje types of actions,
					like this example.
				</Typography>
				<Box className="img__size">
					<img src={typesExample} style={{ width: '80%' }} alt="types example" />
				</Box>
				<Typography className="paragraph">
					They will need to be allways in capital letters separated by an underscore if it has more than one
					word. Now we will move to the reducer and we need to import the <string>types</string> that we need
					and we will assign the cases for the switch on the following way.
				</Typography>
				<Box className="img__size">
					<img src={typesImportReducer} style={{ width: '300px' }} alt="types import reducer" />
				</Box>
				<Typography className="paragraph">
					The blue square is the import from the types. And for the red aquare, every reducer has a initial
					state, each one have different propeties, the important is tu use for the information that we need
					global. Now lets see the <b>switch</b>
				</Typography>
				<Box className="img__size">
					<img src={switchReducer} style={{ width: '80%' }} alt="switch" />
				</Box>
				<Typography className="paragraph">
					In the red square the first that we do is create a function with export default, so we can use the
					cases directly, this function receives a state and an action in case that the function does not
					receive a state, it will taje a initial state, that why we make it.
				</Typography>
				<Typography className="paragraph">
					In the green square we have a defined case, and we return a copy of the state and then after this,
					that information that we want to edit, in this case is <b>searchRecipes</b>, if we already have
					information, we pass a copy of it and the new product.
				</Typography>
				<Typography className="paragraph">
					And at least we need to have a default that will return the state in case that the action does not
					get into any of the defined cases.
				</Typography>
				<Typography variant="h5" className="subtitle">
					But, what executes any of those cases? The actions, and now we will check it.
				</Typography>
				<Typography className="paragraph">
					To execute these cases we need to get in the folder <b>actions</b> and inside of this folder we will
					create a file named <b>RecetasActions.js</b> (for this example), the first tha we will do is import
					the <b>types</b>
				</Typography>
				<Box className="img__size">
					<img src={importTypesAction} style={{ width: '300px' }} alt="import types action" />
				</Box>
				<Typography className="paragraph">After this we will add the following code.</Typography>
				<Box className="img__size">
					<img src={codeAction} style={{ width: '70%' }} alt="code action" />
				</Box>
				<Typography className="paragraph">
					In the red square is the creation of the function as export default, so It could be called from
					other file, it receives a parameter, in this case "producto", after this we add a return with async
					because we will use an API, this "return" will return an arrow function, this function receives as
					parameter a dispatch (dispatch is a function that executes another function).
				</Typography>
				<Typography className="paragraph">
					In the green square is where we make a try so it will make the attempt of an API request, for this
					we will use the "await", so it will wait for the answer, in case that the request <b>get</b> is
					success, the code will use the dispatch to execute the function{' '}
					<b>categoriasActionGetSuccess (response.data.drinks)</b>, what happens here is that it will receive
					the response and will be used to add it to the initial state, the function has the following:
				</Typography>
				<Box className="img__size">
					<img src={codeSuccessAction} style={{ width: '70%' }} alt="code success action" />
				</Box>
				<Typography className="paragraph">
					In the blue square, the <b>catch</b> in case that the request <b>get</b> is error, the code will
					execute the function <b>categoriasActionGetError (error.response)</b> will receive the error and the
					error will be used to add it to the error state in the reducer, the function has the following:
				</Typography>
				<Box className="img__size">
					<img src={codeErrorAction} style={{ width: '70%' }} alt="code error action" />
				</Box>
				<Typography variant="h5" className="subtitle">
					How to use it
				</Typography>
				<Typography className="paragraph">
					First of all we will import the functions from redux and the function created in the action{' '}
					<b>categoriasActionGet</b>.
				</Typography>
				<Box className="img__size">
					<img src={importAction} style={{ width: '70%' }} alt="import action" />
				</Box>
				<Typography className="paragraph">
					After this we will use <b>useDispatch</b> to execute the functions, we will assign it to a variable
					named <b>dispatch</b>
				</Typography>
				<Box className="img__size">
					<img src={dispatchAssing} style={{ width: '70%' }} alt="dispatch assing" />
				</Box>
				<Typography className="paragraph">Function of example to use the action.</Typography>
				<Box className="img__size">
					<img src={exampleFunction} style={{ width: '70%' }} alt="example function" />
				</Box>
				<Typography className="paragraph">
					To get the data that is stored in the <b>state</b> of the <b>reducer</b> we will do the following
				</Typography>
				<Box className="img__size">
					<img src={exampleUseSelector} style={{ width: '80%' }} alt="example UseSelector" />
				</Box>
			</Box>
		</div>
	);
}

export default FirstStepsRedux;
