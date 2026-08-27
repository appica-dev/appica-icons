<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H3V6a1 1 0 0 1 1-1h1m4 12h6m.585-1.414a2 2 0 1 0 2.826 2.831M8.96 5H13v4m0 4v4m8 0v-6m0 0h-6m6 0-3-5h-5M3 3l18 18\"/>";
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
