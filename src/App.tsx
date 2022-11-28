import React, { useState } from "react";
import { Badge } from "./atoms/badge";
import { Button } from "./atoms/button";
import { Checkbox } from "./atoms/checkbox";
import { InputFile } from "./atoms/files/single";
import { H1, H2, H3, H4, H5, H6 } from "./atoms/heading";
import { InputText } from "./atoms/inputText";
import { Password } from "./atoms/password/indext";
import { Radio } from "./atoms/radio";
import { Range } from "./atoms/range";
import { Select } from "./atoms/select";
import { Switch } from "./atoms/switch";
import useModal from "./customHooks/useModal";
import { Alert } from "./molecule/alerts";
import { BlockQuote } from "./molecule/blockquote";
import { Pagination } from "./molecule/pagination";
import { ToastProvider } from "./structure/GlobalToast";
import { Modal } from "./structure/modal";

function App() {
  const { closeModal, isOpen, openModal } = useModal();

  const [a, setA] = useState([
    {
      value: 1,
      label: "Number 1",
    },
    {
      value: 2,
      label: "Number 2",
    },
  ]);

  return (
    <ToastProvider>
      <div className="App">
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <H6>Heading 6</H6>

        <Checkbox />
        <Switch />

        <Range disabled />

        <Pagination
          limitPages={10}
          currentPage={11}
          pages={11}
          onPaginate={(page) => console.log("Get page number", page)}
        />
        <br />
        <br />
        <br />

        <Radio />

        <br />
        <br />
        <br />

        <InputText type="tel" placeholder="Escribe aquí" />

        <br />
        <br />
        <br />
        <InputText type="tel" placeholder="Escribe aquí" isValid={false} />

        <br />
        <br />
        <br />

        {/* <Toast /> */}

        <br />
        <br />
        <br />

        <Password />

        <br />
        <br />
        <br />

        <Select>
          {a.map((data) => (
            <option key={`data-${data.value}`} value={data.value}>
              {data.label}
            </option>
          ))}
        </Select>

        <BlockQuote
          textAlign="right"
          quote="La sociedad hace a las personas"
          autor="??"
        />

        <Button onClick={openModal}>Abrir modal!</Button>
        <Modal
          isOpen={isOpen}
          onClickClose={closeModal}
          header={() => <p>Title here</p>}
          footer={({ triggerClose }) => (
            <div>
              <Button
                onClick={triggerClose}
                style={{
                  margin: "0 10px 0 0 ",
                }}
                theme="danger"
              >
                Cancel
              </Button>
              <Button onClick={triggerClose} theme="success">
                Accept
              </Button>
            </div>
          )}
        >
          {({ triggerClose }) => (
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              ex, impedit autem molestias expedita, magni tempora culpa hic
              officiis voluptatum facere. Corporis unde eius ipsam dolores
              necessitatibus labore a enim eum autem? Assumenda, atque nostrum!
              Assumenda qui nulla corrupti quibusdam, obcaecati alias nisi ab
              atque iure sunt sit deleniti consectetur beatae dolor, similique,
              dolore distinctio ullam sed aperiam at nam aut. Deserunt vero
              voluptates ut corporis, rerum sed voluptatibus harum sint ad
              architecto fugiat exercitationem ipsa animi voluptate obcaecati,
              quae voluptas provident pariatur aliquam neque alias facilis
              tempora. Alias possimus quia non odio obcaecati. Esse atque alias
              necessitatibus iste hic.
            </p>
          )}
        </Modal>

        <br />
        <br />
        <br />

        <InputFile />

        <Alert theme="info" title="Recordatorio creado para 20/11/2022">
          <p
            style={{
              margin: "0",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sunt
            inventore voluptate! Eum voluptatum ducimus atque provident
            quibusdam autem minus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A facilis esse possimus ab assumenda. Ad numquam
            nulla fuga eveniet totam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Natus quae quaerat eveniet praesentium incidunt
            numquam vero quis dolor quo molestias culpa debitis qui odit earum
            error quia, fuga pariatur! Porro velit, nesciunt autem dolorem
            repellendus illo facilis minus, necessitatibus fugiat perferendis
            dolore nisi dolores rerum voluptatum. Repellendus labore provident
            in.
          </p>
        </Alert>

        <Badge theme="info" rounded>
          🔔 Aviso
        </Badge>

        <Button>Primary</Button>

        <Button theme="secondary">Secondary</Button>

        <Button theme="success">Success</Button>

        <Button theme="info">Info</Button>

        <Button theme="warning">Warning</Button>

        <Button theme="danger">Danger</Button>

        <Button theme="light">Light</Button>

        <Button theme="dark">Dark</Button>

        <Button theme="link">Link</Button>
      </div>
    </ToastProvider>
  );
}

export default App;
