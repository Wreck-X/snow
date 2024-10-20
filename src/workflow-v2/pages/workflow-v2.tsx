import React, { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  useEdgesState,
  useNodesState,
  addEdge,
} from "@xyflow/react";

import dagre from "dagre";
import "@xyflow/react/dist/style.css";
import { extractWorkflowData } from "../services/extract-workflow-data";
import { create_graph, parse_workflow } from "../services/parse-workflow-data";
import { Graph } from "../types/types";
import ReactLoading from "react-loading";

const workflowJson = {
  ownerApp: "",
  createTime: 1729332031397,
  updateTime: 1729332031821,
  status: "COMPLETED",
  endTime: 1729332031821,
  workflowId: "f9ce5d57-8e00-11ef-bbcb-0242ac110002",
  tasks: [
    {
      taskType: "get_user_email",
      status: "COMPLETED",
      inputData: {
        userid: "user_a",
      },
      referenceTaskName: "get_user_email_ref",
      retryCount: 0,
      seq: 1,
      pollCount: 1,
      taskDefName: "get_user_email",
      scheduledTime: 1729332031401,
      startTime: 1729332031602,
      endTime: 1729332031610,
      updateTime: 1729332031602,
      startDelayInSeconds: 0,
      retried: false,
      executed: true,
      callbackFromWorker: true,
      responseTimeoutSeconds: 3600,
      workflowInstanceId: "f9ce5d57-8e00-11ef-bbcb-0242ac110002",
      workflowType: "dynamic_workflow",
      taskId: "f9cef998-8e00-11ef-bbcb-0242ac110002",
      callbackAfterSeconds: 0,
      workerId: "BiscuitBobby",
      outputData: {
        result: "user_a@example.com",
      },
      workflowTask: {
        name: "get_user_email",
        taskReferenceName: "get_user_email_ref",
        description: null,
        inputParameters: {
          userid: "${workflow.input.userid}",
        },
        type: "SIMPLE",
        dynamicTaskNameParam: null,
        caseValueParam: null,
        caseExpression: null,
        scriptExpression: null,
        dynamicForkJoinTasksParam: null,
        dynamicForkTasksParam: null,
        dynamicForkTasksInputParamName: null,
        startDelay: 0,
        subWorkflowParam: null,
        sink: null,
        optional: false,
        taskDefinition: {
          ownerApp: null,
          createTime: null,
          updateTime: null,
          createdBy: null,
          updatedBy: null,
          accessPolicy: {},
          name: "get_user_email",
          description: null,
          retryCount: 3,
          timeoutSeconds: 0,
          inputKeys: [],
          outputKeys: [],
          timeoutPolicy: "TIME_OUT_WF",
          retryLogic: "FIXED",
          retryDelaySeconds: 60,
          responseTimeoutSeconds: 3600,
          concurrentExecLimit: null,
          inputTemplate: {},
          rateLimitPerFrequency: 0,
          rateLimitFrequencyInSeconds: 1,
          isolationGroupId: null,
          executionNameSpace: null,
          ownerEmail: null,
          pollTimeoutSeconds: null,
          backoffScaleFactor: 1,
        },
        rateLimited: null,
        asyncComplete: false,
        loopCondition: null,
        retryCount: null,
        evaluatorType: null,
        expression: null,
      },
      rateLimitPerFrequency: 0,
      rateLimitFrequencyInSeconds: 1,
      workflowPriority: 0,
      iteration: 0,
      subworkflowChanged: false,
      queueWaitTime: 201,
      loopOverTask: false,
      taskDefinition: {
        ownerApp: null,
        createTime: null,
        updateTime: null,
        createdBy: null,
        updatedBy: null,
        accessPolicy: {},
        name: "get_user_email",
        description: null,
        retryCount: 3,
        timeoutSeconds: 0,
        inputKeys: [],
        outputKeys: [],
        timeoutPolicy: "TIME_OUT_WF",
        retryLogic: "FIXED",
        retryDelaySeconds: 60,
        responseTimeoutSeconds: 3600,
        concurrentExecLimit: null,
        inputTemplate: {},
        rateLimitPerFrequency: 0,
        rateLimitFrequencyInSeconds: 1,
        isolationGroupId: null,
        executionNameSpace: null,
        ownerEmail: null,
        pollTimeoutSeconds: null,
        backoffScaleFactor: 1,
      },
    },
    {
      taskType: "send_email",
      status: "COMPLETED",
      inputData: {
        subject: "Hello from Orkes",
        body: "Test Email",
        email: "user_a@example.com",
      },
      referenceTaskName: "send_email_ref",
      retryCount: 0,
      seq: 2,
      pollCount: 1,
      taskDefName: "send_email",
      scheduledTime: 1729332031613,
      startTime: 1729332031810,
      endTime: 1729332031817,
      updateTime: 1729332031810,
      startDelayInSeconds: 0,
      retried: false,
      executed: false,
      callbackFromWorker: true,
      responseTimeoutSeconds: 3600,
      workflowInstanceId: "f9ce5d57-8e00-11ef-bbcb-0242ac110002",
      workflowType: "dynamic_workflow",
      taskId: "f9ef2bc9-8e00-11ef-bbcb-0242ac110002",
      callbackAfterSeconds: 0,
      workerId: "BiscuitBobby",
      outputData: {
        result: null,
      },
      workflowTask: {
        name: "send_email",
        taskReferenceName: "send_email_ref",
        description: null,
        inputParameters: {
          email: "${get_user_email_ref.output.result}",
          subject: "Hello from Orkes",
          body: "Test Email",
        },
        type: "SIMPLE",
        dynamicTaskNameParam: null,
        caseValueParam: null,
        caseExpression: null,
        scriptExpression: null,
        dynamicForkJoinTasksParam: null,
        dynamicForkTasksParam: null,
        dynamicForkTasksInputParamName: null,
        startDelay: 0,
        subWorkflowParam: null,
        sink: null,
        optional: false,
        taskDefinition: {
          ownerApp: null,
          createTime: null,
          updateTime: null,
          createdBy: null,
          updatedBy: null,
          accessPolicy: {},
          name: "send_email",
          description: null,
          retryCount: 3,
          timeoutSeconds: 0,
          inputKeys: [],
          outputKeys: [],
          timeoutPolicy: "TIME_OUT_WF",
          retryLogic: "FIXED",
          retryDelaySeconds: 60,
          responseTimeoutSeconds: 3600,
          concurrentExecLimit: null,
          inputTemplate: {},
          rateLimitPerFrequency: 0,
          rateLimitFrequencyInSeconds: 1,
          isolationGroupId: null,
          executionNameSpace: null,
          ownerEmail: null,
          pollTimeoutSeconds: null,
          backoffScaleFactor: 1,
        },
        rateLimited: null,
        asyncComplete: false,
        loopCondition: null,
        retryCount: null,
        evaluatorType: null,
        expression: null,
      },
      rateLimitPerFrequency: 0,
      rateLimitFrequencyInSeconds: 1,
      workflowPriority: 0,
      iteration: 0,
      subworkflowChanged: false,
      queueWaitTime: 197,
      loopOverTask: false,
      taskDefinition: {
        ownerApp: null,
        createTime: null,
        updateTime: null,
        createdBy: null,
        updatedBy: null,
        accessPolicy: {},
        name: "send_email",
        description: null,
        retryCount: 3,
        timeoutSeconds: 0,
        inputKeys: [],
        outputKeys: [],
        timeoutPolicy: "TIME_OUT_WF",
        retryLogic: "FIXED",
        retryDelaySeconds: 60,
        responseTimeoutSeconds: 3600,
        concurrentExecLimit: null,
        inputTemplate: {},
        rateLimitPerFrequency: 0,
        rateLimitFrequencyInSeconds: 1,
        isolationGroupId: null,
        executionNameSpace: null,
        ownerEmail: null,
        pollTimeoutSeconds: null,
        backoffScaleFactor: 1,
      },
    },
  ],
  input: {
    userid: "user_a",
  },
  output: {
    send_emaol: null,
    email: "user_a@example.com",
  },
  taskToDomain: {},
  failedReferenceTaskNames: [],
  workflowDefinition: {
    ownerApp: null,
    createTime: null,
    updateTime: null,
    createdBy: null,
    updatedBy: null,
    accessPolicy: {},
    name: "dynamic_workflow",
    description: null,
    version: 1,
    tasks: [
      {
        name: "get_user_email",
        taskReferenceName: "get_user_email_ref",
        description: null,
        inputParameters: {
          userid: "${workflow.input.userid}",
        },
        type: "SIMPLE",
        dynamicTaskNameParam: null,
        caseValueParam: null,
        caseExpression: null,
        scriptExpression: null,
        dynamicForkJoinTasksParam: null,
        dynamicForkTasksParam: null,
        dynamicForkTasksInputParamName: null,
        startDelay: 0,
        subWorkflowParam: null,
        sink: null,
        optional: false,
        taskDefinition: {
          ownerApp: null,
          createTime: null,
          updateTime: null,
          createdBy: null,
          updatedBy: null,
          accessPolicy: {},
          name: "get_user_email",
          description: null,
          retryCount: 3,
          timeoutSeconds: 0,
          inputKeys: [],
          outputKeys: [],
          timeoutPolicy: "TIME_OUT_WF",
          retryLogic: "FIXED",
          retryDelaySeconds: 60,
          responseTimeoutSeconds: 3600,
          concurrentExecLimit: null,
          inputTemplate: {},
          rateLimitPerFrequency: 0,
          rateLimitFrequencyInSeconds: 1,
          isolationGroupId: null,
          executionNameSpace: null,
          ownerEmail: null,
          pollTimeoutSeconds: null,
          backoffScaleFactor: 1,
        },
        rateLimited: null,
        asyncComplete: false,
        loopCondition: null,
        retryCount: null,
        evaluatorType: null,
        expression: null,
      },
      {
        name: "send_email",
        taskReferenceName: "send_email_ref",
        description: null,
        inputParameters: {
          email: "${get_user_email_ref.output.result}",
          subject: "Hello from Orkes",
          body: "Test Email",
        },
        type: "SIMPLE",
        dynamicTaskNameParam: null,
        caseValueParam: null,
        caseExpression: null,
        scriptExpression: null,
        dynamicForkJoinTasksParam: null,
        dynamicForkTasksParam: null,
        dynamicForkTasksInputParamName: null,
        startDelay: 0,
        subWorkflowParam: null,
        sink: null,
        optional: false,
        taskDefinition: {
          ownerApp: null,
          createTime: null,
          updateTime: null,
          createdBy: null,
          updatedBy: null,
          accessPolicy: {},
          name: "send_email",
          description: null,
          retryCount: 3,
          timeoutSeconds: 0,
          inputKeys: [],
          outputKeys: [],
          timeoutPolicy: "TIME_OUT_WF",
          retryLogic: "FIXED",
          retryDelaySeconds: 60,
          responseTimeoutSeconds: 3600,
          concurrentExecLimit: null,
          inputTemplate: {},
          rateLimitPerFrequency: 0,
          rateLimitFrequencyInSeconds: 1,
          isolationGroupId: null,
          executionNameSpace: null,
          ownerEmail: null,
          pollTimeoutSeconds: null,
          backoffScaleFactor: 1,
        },
        rateLimited: null,
        asyncComplete: false,
        loopCondition: null,
        retryCount: null,
        evaluatorType: null,
        expression: null,
      },
    ],
    inputParameters: [],
    outputParameters: {
      email: "${get_user_email_ref.output.result}",
      send_emaol: "${send_email_ref.output.result}",
    },
    failureWorkflow: "",
    schemaVersion: 2,
    restartable: true,
    workflowStatusListenerEnabled: false,
    ownerEmail: null,
    timeoutPolicy: "ALERT_ONLY",
    timeoutSeconds: 60,
    variables: {},
    inputTemplate: {},
  },
  priority: 0,
  variables: {},
  lastRetriedTime: 0,
  failedTaskNames: [],
  workflowVersion: 1,
  startTime: 1729332031397,
  workflowName: "dynamic_workflow",
};
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes: any[], edges: any[]) => {
  const nodeWidth = 172;
  const nodeHeight = 36;
  dagreGraph.setGraph({ rankdir: "TB" }); // Top to Bottom layout

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
  });

  return { nodes, edges };
};

const initialNodes = [
  { id: '1', data: { label: 'Start' }, position: { x: 0, y: 0 } },
  { id: '2', data: { label: 'fork_task (fork_task)' }, position: { x: 0, y: 0 } },
  { id: '3', data: { label: 'FindUser_E1 (FindUser_E1)' }, position: { x: 0, y: 0 } },
  { id: '4', data: { label: 'Message_E3 (Message_E3)' }, position: { x: 0, y: 0 } },
  { id: '5', data: { label: 'Retrive_E2 (Retrieve_E2)' }, position: { x: 0, y: 0 } },
  { id: '6', data: { label: 'Join_task' }, position: { x: 0, y: 0 } },
  { id: '7', data: { label: 'Final' }, position: { x: 0, y: 0 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e4-6', source: '4', target: '6' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e6-7', source: '6', target: '7' },
];

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState("");

  useEffect(() => {
    // Start loading when the effect runs
    setLoading(true);

    const delay = setTimeout(() => {
      // Apply Dagre layout
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodes, edges);

      // Set the new layouted nodes and edges
      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);

      // Stop loading after layout is done
      setLoading(false);
    }, 1000); // Simulate delay

    return () => clearTimeout(delay);
  }, []); // Run only once or when nodes/edges change

  return (
    <div className="flex flex-row bg-slate-400">
      <div style={{ width: "70%", height: "100vh" }}>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <ReactLoading type={"balls"} color={"#FFFFFF"} height={100} width={50}/>
          </div>
        ) : (
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
          />
        )}
      </div>
      <div className="w-[30%] flex flex-col bg-deep-blue m-5 rounded-md">
        <div className="bg-light-blue h-5/6 m-5 mb-0 rounded-md flex justify-center items-center">
          {generated}
        </div>
        <div className="h-1/6 m-5 flex items-center justify-center">
          <div
            className="h-20 w-36 text-sm font-semibold bg-light-blue rounded-md flex justify-center items-center cursor-pointer shadow-2xl"
            onClick={() => {
              setGenerated("Vittoria Ceretti's birthdate is not explicitly stated in the provided information.  To find her birthdate, you would need to visit one of the provided links, especially the \"Vittoria Ceretti - Age, Family, Bio\" link from Famous Birthdays. \n  ")
            }}
          >
            INITIALISE
          </div>
        </div>
      </div>
    </div>
  );
}