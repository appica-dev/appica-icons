<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.813 20.5h6.374M12 14.125V20.5M8.813 8.813h6.374M3.5 5.624A2.125 2.125 0 0 1 5.625 3.5h12.75A2.125 2.125 0 0 1 20.5 5.625V12a2.125 2.125 0 0 1-2.125 2.125H5.625A2.125 2.125 0 0 1 3.5 12z\"/>";
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
