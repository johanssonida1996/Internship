import useForm from "./useForm";
import validate from "./validate";
import "./App.css";

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log( values.hostingenvState, values.envState, values.HapiId, values.tenantname, values.check, values.checkT, values.Stenantfromtoken);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
      <h1 className="Header">Service Token Generator</h1>
        <div>
    
        <label className="title">Hosting Enviroment</label>
          <div>
            <select className={`${errors.hostingenvState && "inputError"}`} name="hostingenvState" value={values.hostingenvState} onChange={handleChange}>
                <option name="selected"> Select Hosting Enviroment</option>
                <option name="Dev">Dev</option>
                <option name="QA">QA</option>
                <option name="Prod">Prod</option>
            </select>
            {errors.hostingenvState && <p className="error">{errors.hostingenvState}</p>}
          </div>

          <label>Enviroment</label>
          <div>

          <select className={`${errors.envState && "inputError"}`} name="envState" value={values.envState} onChange={handleChange}>
                <option name="selectedE">Select Envicoment</option>
                <option name="Cloud">Cloud</option>
                <option name="HAPI">HAPI-id</option>
          </select>
          {errors.envState && <p className="error">{errors.envState}</p>}
          </div>

          <label>HAPI-ID</label>
          <div>
          <input className={`${errors.HapiId && "inputError"}`} name="HapiId" type="text" value={values.HapiId} onChange={handleChange} disabled />
            {errors.HapiId && <p className="error">{errors.HapiId}</p>}
          </div>

          <label>Tenantname</label>
          <div>
            <input className={`${errors.tenantname && "inputError"}`} name="tenantname" type="text" value={values.tenantname} onChange={handleChange} />
            {errors.tenantname && <p className="error">{errors.tenantname}</p>}
          </div>

          <div>
          <input type="checkbox" className={`${errors.check && "inputError"}`} name="check"  value={values.check} onChange={handleChange} /><span>API Gateway</span>
          {errors.check && <p className="error">{errors.check}</p>}
          </div>

          <div>
          <input type="checkbox" className={`${errors.check && "inputError"}`} name="check"  value={values.check} onChange={handleChange} /><span>ExportService</span>
          {errors.check && <p className="error">{errors.check}</p>}
          </div>

          <div>
          <input type="checkbox" className={`${errors.check && "inputError"}`} name="check"  value={values.check} onChange={handleChange}  /><span>CertiqConnectior</span>
          {errors.check && <p className="error">{errors.check}</p>}
          </div>

          <div>
          <input type="checkbox" className={`${errors.check && "inputError"}`} name="check"  value={values.check} onChange={handleChange} /><span>SensorConnector</span>
          {errors.check && <p className="error">{errors.check}</p>}
          </div>

          <div>
          <input type="checkbox" className={`${errors.check && "inputError"}`} name="check"  value={values.check} onChange={handleChange} /><span>ConnectiorCertiq</span>
          {errors.check && <p className="error">{errors.check}</p>}
          </div>

          <div>
          <input type="checkbox" className={`${errors.check && "inputError"}`} name="check"  value={values.check} onChange={handleChange} /><span>SparkplugConnectior</span>
          {errors.check && <p className="error">{errors.check}</p>}
          </div>

          <div>
          <input type="checkbox" className={`${errors.check && "inputError"}`} name="check"  value={values.check} onChange={handleChange} /><span>MeasurementService</span>
          {errors.check && <p className="error">{errors.check}</p>}
          </div>

          <div>
          <input type="checkbox" className={`${errors.check && "inputError"}`} name="check"  value={values.check} onChange={handleChange}  /><span>MirrorConnector</span>
          {errors.check && <p className="error">{errors.check}</p>}
          </div>

          <div>
          <input type="checkbox" className={`${errors.checkT && "inputError"}`} name="checkT"  value={values.checkT} onChange={handleChange}/><span>TenantFromToken</span>
          {errors.checkT && <p className="error">{errors.checkT}</p>}
          </div>

          <div>
          <select className={`${errors.Stenantfromtoken && "inputError"}`} name="Stenantfromtoken" value={values.Stenantfromtoken} onChange={handleChange} disabled>
              <option name="selectedT">Select TenantFromToken</option>
              <option name="TenantFromToken">TenantFromToken</option>
          </select> 
          {errors.Stenantfromtoken && <p className="error">{errors.Stenantfromtoken}</p>}
          </div>


        </div>
        <div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



export default Form;