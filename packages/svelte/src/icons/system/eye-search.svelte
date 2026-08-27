<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 18q-.492 0-.97-.05Q6.271 17.452 3 12q3.6-6 9-6 5.197 0 8.727 5.558M20.2 20.2 22 22M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0m5 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
