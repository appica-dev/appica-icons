<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 9.995C16.326 8.294 15.5 6.993 13.031 7S8.66 8.052 8 9.995c-2 0-3 1.502-3 3.003-1.64.046-3.001 1.36-3 3.002h20c-.006-2.177-1-6.005-5-6.005m0 0L14.5 16M12 12.998h6\"/>";
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
