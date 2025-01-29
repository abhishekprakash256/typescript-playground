/*
code to make tree and do the traversal
*/


// maek the TreeNode class
class TreeNode
{
	val : number ; 
	left : TreeNode | null ; 
	right : TreeNode | null ;


    constructor(val: number , left : TreeNode | null = null , right : TreeNode | null = null ) {
        this.val = val ;
        this.left = left ; 
        this.right = right ;

    }
}


// Create the nodes
const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);


// Attach the nodes correctly
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;


/*
Tree image

        1
       / \
      2   3
     / \  / \
    4   5 6  7


*/

//make the helper function to traverse the tree

class Helper_Fun
{	
	helper_dfs(node: any)
	{

	//base case 
	if (! node) 
		{
			return ;
		}

		//print the value
		console.log(node.val) ;

		//make the recursive call
		this.helper_dfs(node.left) ; 

		this.helper_dfs(node.right) ;

	}

	tree_print_dfs( root : any )
	
	{
		//base case 
		if (! root)
			{
				console.log(null) ;
			} 

		if (root.left == null && root.right == null)
			{
				console.log(root.val) ;
			}

		//make the recurseive call
		this.helper_dfs(root) ;

	} 
}



//make the helper function 
const helper_fun = new Helper_Fun() ;
console.log(helper_fun.tree_print_dfs(root)) 