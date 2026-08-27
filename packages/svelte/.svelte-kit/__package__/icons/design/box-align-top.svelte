<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 15.005v-.01m0 5.01v-.01m5 .01v-.01m6 .01v-.01m5 .01v-.01m0-4.99v-.01m-16-4.99h16v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z\"/>";
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
