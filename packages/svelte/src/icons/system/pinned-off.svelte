<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 3 18 18M15 4.5l-3.249 3.249m-2.57 1.433L7 10l-1.5 1.5 7 7L14 17l.82-2.186m1.43-2.563L19.5 9M9 15l-4.5 4.5M14.5 4 20 9.5\"/>";
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
