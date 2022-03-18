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
    return (
        <StepperStyled>
            <div className="stepper-header">
                {stepHeaderConfig.map((step: any) => (
                    <div
                        key={step.stepNumber}
                        style={{
                            borderColor:
                                props.step >= step.stepNumber
                                    ? "red"
                                    : "var(--color-grey",
                        }}
                    >
                        <span
                            style={{
                                color:
                                    props.step >= step.stepNumber
                                        ? "red"
                                        : "var(--color-grey",
                            }}
                        >
                            {step.stepLabel}
                        </span>
                        <p>{step.stepDescription}</p>
                    </div>
                ))}
            </div>
            <StepperHeaderTitle>
                {
                    stepHeaderConfig.find(
                        (step) => step.stepNumber === props.step
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
