<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 10h.01M15 10h.01M9.5 15.25a3.5 3.5 0 0 1 5 0m6.365-1.733A9 9 0 0 0 21 12a9 9 0 1 0-9 9c.69 0 1.36-.076 2-.222m3.566-3.172a2 2 0 1 0 2.897.03L19 16z\"/>";
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
