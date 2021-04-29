import { PureComponent } from "react";


export default class Tabs extends PureComponent {
    state = {
        activeTabidx: 0,
    }

    setActiveTabIdx = idx => {
        this.setState({activeTabidx: idx})
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.activeTabidx !== this.state.activeTabidx;
    // }


    render () {
        console.log('re-render', Date.now())
        const { activeTabidx } = this.state;
        const { items } = this.props;
        const activeTab = items[activeTabidx];
        return (
            <>
            <div>
                {items.map(( item, idx ) => {
                    return (
                    <button
                    type="button"
                    key={item.label}
                    onClick={()=> this.setActiveTabIdx(idx)}>
                        {item.label}
                    </button>
                    )
                })}
            </div>
            <div>
                <h2>{activeTab.label}</h2>
                <p>{activeTab.content}</p>
            </div>
            </>
        );
    };
}