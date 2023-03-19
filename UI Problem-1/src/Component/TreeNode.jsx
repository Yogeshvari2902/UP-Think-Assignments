import { useState } from "react";
import {HiPlus,HiMinus} from "react-icons/hi"
const TreeNode = ({ node, onNodeClick, expandedNodes }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
    const isNodeExpanded =
      expandedNodes.indexOf(node.id) > -1 || (node.children && isExpanded);
    return (
      <div>
        <div style={{fontSize:"20px"}} onClick={() => onNodeClick(node)}>
          <span onClick={handleToggle}>
            {isNodeExpanded ? <HiMinus/> : <HiPlus/>}
          </span>{" "}
          {node.label}
        </div>
        {node.children && isNodeExpanded && (
          <div style={{ marginLeft: "20px" }}>
            {node.children.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
                onNodeClick={onNodeClick}
                expandedNodes={expandedNodes}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  export default TreeNode