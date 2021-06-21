import profileReducer, { addPostAC, deletePostAC } from './profile-reducer';

const initialState = {
    posts : [
        { id : 1, message : 'Hi, how a you?', likesCount : 10 },
        { id : 2, message : 'It\'s my first post!', likesCount : 7 }
    ]
};
test( 'length after add === post.length + 1', () => {
    // Test data
    const action = addPostAC( 'test text' );
    // action
    const newState = profileReducer( initialState, action );
    // expectation
    expect( newState.posts.length ).toBe( 3 );
} );

test( 'message of new post should be correct', () => {
    // Test data
    const action = addPostAC( 'test text' );
    // action
    const newState = profileReducer( initialState, action );
    // expectation
    expect( newState.posts[2].message ).toBe( 'test text' );
} );

test( 'length after deleting === post.length - 1', () => {
    // Test data
    const action = deletePostAC(1);
    // action
    const newState = profileReducer( initialState, action );
    // expectation
    expect( newState.posts.length ).toBe( 1 );
} );

test( 'length after delete with incorrect id === posts.length', () => {
    // Test data
    const action = deletePostAC(5);
    // action
    const newState = profileReducer( initialState, action );
    // expectation
    expect( newState.posts.length ).toBe( 2 );
} );

