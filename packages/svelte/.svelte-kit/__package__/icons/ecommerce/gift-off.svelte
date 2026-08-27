<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 8h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4m-4-4c-.74-3.05-2.526-5.034-4.5-5q-.223.001-.434.037M12 8c.74-3.05 2.526-5.034 4.5-5a2.5 2.5 0 0 1 0 5M8 8H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8v9m7-9v3m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1-2.457-2.963M3 3l18 18\"/>";
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
