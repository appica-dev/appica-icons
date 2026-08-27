<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.129 20.99H8.426a3.2 3.2 0 0 1-2.038-.722 2.97 2.97 0 0 1-1.055-1.82L4.024 10.3a1.9 1.9 0 0 1 .056-.853c.083-.277.227-.534.423-.752a2.1 2.1 0 0 1 .712-.515c.273-.12.57-.183.871-.183h11.828c.3 0 .598.063.871.183s.516.296.712.515c.196.218.34.475.423.752s.101.568.056.853l-.27 1.677M8.87 10.996V5.998c0-.795.33-1.557.917-2.12A3.2 3.2 0 0 1 11.999 3a3.2 3.2 0 0 1 2.213.878c.587.563.917 1.325.917 2.12v4.998m4.172 4.997v2.999m0 2.998V22\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
