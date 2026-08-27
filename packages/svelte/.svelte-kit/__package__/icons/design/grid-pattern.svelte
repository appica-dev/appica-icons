<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.875 7.75v8.5m4.25-8.5v8.5M7.75 9.875h8.5m-8.5 4.25h8.5M3.5 5.625A2.125 2.125 0 0 1 5.625 3.5h12.75A2.125 2.125 0 0 1 20.5 5.625v12.75a2.125 2.125 0 0 1-2.125 2.125H5.625A2.125 2.125 0 0 1 3.5 18.375z\"/>";
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
