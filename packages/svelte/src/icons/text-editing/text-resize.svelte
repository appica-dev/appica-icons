<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 7a2 2 0 1 1 2-2M5 7a2 2 0 0 0 2-2M5 7v10M7 5h10m0 0a2 2 0 0 0 2 2m-2-2a2 2 0 1 1 2 2m0 0v10M7 19a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h10m0 0a2 2 0 1 0 2-2m-2 2a2 2 0 0 1 2-2m-9-7h4m-2 4v-4\"/>";
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
