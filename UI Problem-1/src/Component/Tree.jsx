import { useState } from "react";
import TreeNode from "./TreeNode";
const Tree = ({ data }) => {
    const [expandedNodes, setExpandedNodes] = useState([]);
    const [text,setText] = useState("")
  
    const handleNodeClick = (node) => {
      if (node.details) {
        setText(node.details);

      } else {
        if (expandedNodes.indexOf(node.id) > -1) {
          setExpandedNodes(
            expandedNodes.filter((id) => id !== node.id)
          );
        } else {
          setExpandedNodes([...expandedNodes, node.id]);
        }
      }
    };
  
    return (
      <div style={{display:"flex"}}>
        <div style={{border:"2px solid black", padding:"10px"}}>
         {data.map((rootNode) => (
          <TreeNode
            key={rootNode.id}
            node={rootNode}
            onNodeClick={handleNodeClick}
            expandedNodes={expandedNodes}
          />
         ))}
        </div>
        <div style={{fontSize:"20px", padding:"20px"}}>{text}</div>
      </div>
    );
  };

  export default Tree