<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 16c-.692-2.67-1.047-5.69-4-6q.5-2 3-2 3.5 0 6 8 2.5-8 6-8 2.5 0 3 2c-2.953.31-3.308 3.33-4 6M9 9.5Q11 6 12 6t3 3.5m-10 8A1.5 1.5 0 0 1 6.5 16h11a1.5 1.5 0 1 1 0 3h-11A1.5 1.5 0 0 1 5 17.5\"/>";
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
