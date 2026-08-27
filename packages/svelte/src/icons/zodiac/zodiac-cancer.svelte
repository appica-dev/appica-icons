<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.001 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0c-.148-1.124.158-2.254.885-3.278.728-1.025 1.854-1.908 3.266-2.564 1.413-.656 3.064-1.062 4.79-1.177 1.728-.115 3.47.064 5.06.519m4 6.5A3 3 0 1 1 15 12a3 3 0 0 1 6 0m0 0c.147 1.124-.158 2.254-.886 3.278s-1.854 1.908-3.266 2.564c-1.413.656-3.064 1.062-4.79 1.177A14.9 14.9 0 0 1 7 18.5\"/>";
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
