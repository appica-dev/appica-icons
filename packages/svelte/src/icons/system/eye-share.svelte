<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.597 17.981A10 10 0 0 1 12 18q-5.4 0-9-6 3.6-6 9-6t9 6q-.307.513-.63.983M16 22l5-5m0 0v4.5m0-4.5h-4.5M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
