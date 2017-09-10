import React from 'react'
import {Field, reduxForm} from 'redux-form';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import s from './Styles.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/styles';

let TestForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props;
  const topic_0 =
    `
    int i = 0;
    System.out.print(++i);
    System.out.print(i++);
    System.out.print(i); 
    `;
  const topic_1 =
    `
      public static void main(String[] args) {
          int i = 3;
          switch (i) {
              case 3:
                  System.out.print("3");
              case 2:
                  System.out.print("2");
              default:
                  System.out.print("default");
          }
      }

      `;

  const topic_2 =
    `
      class Main {
          public static void main(String str[]) {
              Parent t = new Child();
              t.tests();
          }
      }
      
      class Parent {
          void tests() {
              System.out.println("Parent");
          }
      }
      
      class Child extends Parent {
          static void tests() {
              System.out.println("Child");
          }
      }
      `;
  const topic_2_1 =
    `
      class Main {
          public static void main(String str[]) {
              Parent t = new Child();
              t.tests();
          }
      }

      class Parent {
          void tests() {
              System.out.println("Parent");
          }
      }
      
      class Child extends Parent {
          void tests() {
              System.out.println("Child");
          }
      }
      `;

  const topic_3 =
    `
      public class Person { 
          private String name; 
          public Person(String name) { 
              this.name = name; 
          } 
              
          @Override
          public boolean equals(Person p) { 
              return p.name.equals(this.name); 
          } 
      } `;


  const topic_4 =
    `
    class Main {
        public static void main(String str[]) {
            System.out.println(this);
        }
     
        public String toString() {
            return "Hello";
        }
    }
    `;
  return (
    <form
      onSubmit={handleSubmit}
      className={s.testFormContainer}>
      <FormGroup className={s.formRow}>
        <legend>Асимптотическая сложность алгоритмов. (Используйте О-нотацию). Укажите, чему равна
          алгоритмическая сложность поиска по ключу в хеш-таблице?
        </legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section11"
              component="input"
              type="checkbox"
            />{' '}
            O(1)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section12"
              component="input"
              type="checkbox"
            />{' '}
            O(N)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section13"
              component="input"
              type="checkbox"
            />{' '}
            O(logN)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section14"
              component="input"
              type="checkbox"
            />{' '}
            O(N*logN)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section15"
              component="input"
              type="checkbox"
            />{' '}
            O(N^2)
          </Label>
        </FormGroup>
      </FormGroup>

      <FormGroup className={s.formRow}>
        <legend>Чему равна
          алгоритмическая сложность доступа по произвольному индексу в массиве?
        </legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section21"
              component="input"
              type="checkbox"
            />{' '}
            O(1)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section22"
              component="input"
              type="checkbox"
            />{' '}
            O(N)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section23"
              component="input"
              type="checkbox"
            />{' '}
            O(logN)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section24"
              component="input"
              type="checkbox"
            />{' '}
            O(N*logN)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section25"
              component="input"
              type="checkbox"
            />{' '}
            O(N^2)
          </Label>
        </FormGroup>
      </FormGroup>

      <FormGroup className={s.formRow}>
        <legend>Чему равна
          алгоритмическая сложность доступа по произвольному индексу в односвязном списке?
        </legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section31"
              component="input"
              type="checkbox"
            />{' '}
            O(1)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section32"
              component="input"
              type="checkbox"
            />{' '}
            O(N)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section33"
              component="input"
              type="checkbox"
            />{' '}
            O(logN)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section34"
              component="input"
              type="checkbox"
            />{' '}
            O(N*logN)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section35"
              component="input"
              type="checkbox"
            />{' '}
            O(N^2)
          </Label>
        </FormGroup>
      </FormGroup>

      <FormGroup className={s.formRow}>
        <legend>Чему равна
          алгоритмическая сложность быстрой сортировки(quick sort)?
        </legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section41"
              component="input"
              type="checkbox"
            />{' '}
            O(1)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section42"
              component="input"
              type="checkbox"
            />{' '}
            O(N)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section43"
              component="input"
              type="checkbox"
            />{' '}
            O(logN)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section44"
              component="input"
              type="checkbox"
            />{' '}
            O(N*logN)
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section45"
              component="input"
              type="checkbox"
            />{' '}
            O(N^2)
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup className={s.formRow}>
        <legend>Как можно уничтожить объект в Java?</legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section51"
              component="input"
              type="checkbox"
            />{' '}
            присвоить null всем ссылкам на объект
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section52"
              component="input"
              type="checkbox"
            />{' '}
            вызвать метод finalize() у объекта
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section53"
              component="input"
              type="checkbox"
            />{' '}
            вызвать System.gc()
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section54"
              component="input"
              type="checkbox"
            />{' '}
            вызвать деструктор у объекта
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup className={s.formRow}>
        <legend>Что будет напечатано после выполнения?
          <br/>
          <SyntaxHighlighter language='java' style={docco}>
            {topic_1}
          </SyntaxHighlighter>
        </legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section61"
              component="input"
              type="checkbox"
            />{' '}
            3
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section62"
              component="input"
              type="checkbox"
            />{' '}
            default
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section63"
              component="input"
              type="checkbox"
            />{' '}
            32default
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section64"
              component="input"
              type="checkbox"
            />{' '}
            3default
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup className={s.formRow}>
        <legend>Что будет напечатано после выполнения?
          <SyntaxHighlighter language='java' style={docco}>
            {topic_0}
          </SyntaxHighlighter>
        </legend>
        <Field className="form-control" component="input" type="text" name="section71"
               placeholder="Что будет напечатано после выполнения?"/>
      </FormGroup>
      <FormGroup className={s.formRow}>
        <legend>Сколько байт занимает int в Java?
        </legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section81"
              component="input"
              type="checkbox"
            />{' '}
            1
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section82"
              component="input"
              type="checkbox"
            />{' '}
            2
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section83"
              component="input"
              type="checkbox"
            />{' '}
            4
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section84"
              component="input"
              type="checkbox"
            />{' '}
            8
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup className={s.formRow}>
        <legend>Что будет напечатано после выполнения?
          <br/>
          <SyntaxHighlighter language='java' style={docco}>
            {topic_2}
          </SyntaxHighlighter>
        </legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section91"
              component="input"
              type="checkbox"
            />{' '}
            Parent
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section92"
              component="input"
              type="checkbox"
            />{' '}
            Child
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section93"
              component="input"
              type="checkbox"
            />{' '}
            Не скомпилируется
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section94"
              component="input"
              type="checkbox"
            />{' '}
            Runtime exception
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup className={s.formRow}>
        <legend>Что будет напечатано после выполнения?
          <br/>
          <SyntaxHighlighter language='java' style={docco}>
            {topic_2_1}
          </SyntaxHighlighter>
        </legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section911"
              component="input"
              type="checkbox"
            />{' '}
            Parent
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section912"
              component="input"
              type="checkbox"
            />{' '}
            Child
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section913"
              component="input"
              type="checkbox"
            />{' '}
            Не скомпилируется
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section914"
              component="input"
              type="checkbox"
            />{' '}
            Runtime exception
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup className={s.formRow}>
        <legend>Выберите правильные высказывания относительно концепции взаимосвязи методов
          hashCode() и equals(Object o)
        </legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section101"
              component="input"
              type="checkbox"
            />{' '}
            Если при сравнении двух объектов метод equals возращает значение true, то
            значения, возвращаемые методами hashCode() этих объектов, должны совпадать.
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section102"
              component="input"
              type="checkbox"
            />{' '}
            Если при сравнении двух объектов метод equals возращает значение true, то
            значения, возвращаемые методами hashCode() этих объектов, могут не совпадать.
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section103"
              component="input"
              type="checkbox"
            />{' '}
            Если при сравнении двух объектов метод equals возращает значение false, то
            значения, возвращаемые методами hashCode() этих объектов, должны быть
            различными.
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section104"
              component="input"
              type="checkbox"
            />{' '}
            Если при сравнении двух объектов метод equals возращает значение false, то
            значения, возвращаемые методом hashCode() этих объектов, могут совпадать.
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup className={s.formRow}>
        <legend>Какое утверждение верно по отношению к данному коду:
          <br/>
          <SyntaxHighlighter language='java' style={docco}>
            {topic_3}
          </SyntaxHighlighter>
        </legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section111"
              component="input"
              type="checkbox"
            />{' '}
            Код не скомпилируется, так как сигнатура метода equals объявлена не правильно
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section112"
              component="input"
              type="checkbox"
            />{' '}
            Код не скомпилируется, так как из метода equals не доступно p.name.
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section113"
              component="input"
              type="checkbox"
            />{' '}
            Для того, чтобы класс корректно работал в любом контексте, он должен
            переопределить еще и метод hashCode класса Object
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section114"
              component="input"
              type="checkbox"
            />{' '}
            В методе equals не хватает вызова super.equals(this.name).
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup className={s.formRow}>
        <legend>Что будет результатом выполнения программы?
          <br/>
          <SyntaxHighlighter language='java' style={docco}>
            {topic_4}
          </SyntaxHighlighter>
        </legend>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section121"
              component="input"
              type="checkbox"
            />{' '}
            Код не скомпилируется
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section122"
              component="input"
              type="checkbox"
            />{' '}
            Будет выведено Hello
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section123"
              component="input"
              type="checkbox"
            />{' '}
            Будет выведено название метода
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Field
              className="form-check-input"
              name="section124"
              component="input"
              type="checkbox"
            />{' '}
            Будет выведено название класс
          </Label>
        </FormGroup>
      </FormGroup>
      <button type="submit" className="btn btn-secondary" disabled={pristine || submitting}>Отправить</button>
    </form>
  )
}

TestForm = reduxForm({
  form: 'testForm'  // a unique identifier for this form
})(TestForm);

export default withStyles(s)(TestForm);
