<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 3v18h18m0-18-6 1.5m-.887 2.15 2.771 3.695M16 12.5l-5 2M7 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0m4-10a2 2 0 1 0 4 0 2 2 0 0 0-4 0m5 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
