<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 6h8M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M8 6 6.906 7.759A6 6 0 0 0 6 10.929V19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8.071a6 6 0 0 0-.906-3.17L16 6m-6 4h4m-4 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
