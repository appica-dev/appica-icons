<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 8V7a2 2 0 0 0-2-2h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h1m5 1v-3m-2-4v-2.5m4 2.5v-2.5M12 14h6v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z\"/>";
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
