import styled from "styled-components";
import StepperStyled from "./Stepper.style";
export default function Stepper(props: any) {
    const stepHeaderConfig = [
        {
            stepNumber: 1,
            stepLabel: "step 1",
            stepDescription: "Choose type",
        },
        {
            stepNumber: 2,
            stepLabel: "step 2",
            stepDescription: "Fill info",
        },
        {
            stepNumber: 3,
            stepLabel: "step 3",
            stepDescription: "Confirm",
        },
    ];
    const stepNumber = 3;
    return (
        <StepperStyled>
            <div className="stepper-header">
                {stepHeaderConfig.map((step: any) => (
                    <div onClick={() => props.setStep(step.stepNumber)}>
                        <span>{step.stepLabel}</span>
                        <p>{step.stepDescription}</p>
                    </div>
                ))}
            </div>
            <StepperHeaderTitle>
                {
                    stepHeaderConfig.find(
                        (step) => step.stepNumber === stepNumber
                    )?.stepDescription
                }
            </StepperHeaderTitle>

            {props.children}
        </StepperStyled>
    );
}

const StepperHeaderTitle = styled.div`
    border-bottom: 1px solid white;
    padding-top: 60px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-align: left;
    color: white;
    font-weight: 700;
`;
