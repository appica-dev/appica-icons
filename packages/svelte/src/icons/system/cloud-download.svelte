<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19 18a3.5 3.5 0 0 0 0-7h-1c.145-.65.148-1.32.006-1.97a4.8 4.8 0 0 0-.832-1.823 5.4 5.4 0 0 0-1.543-1.398 6 6 0 0 0-2.02-.76 6.2 6.2 0 0 0-2.19-.005 6 6 0 0 0-2.025.749C8.156 6.533 7.294 7.687 7 9a4.75 4.75 0 0 0-2.965.886 4.4 4.4 0 0 0-1.7 2.487 4.23 4.23 0 0 0 .34 2.954A4.5 4.5 0 0 0 4.9 17.4M12 13v9m0 0-3-3m3 3 3-3\"/>";
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
