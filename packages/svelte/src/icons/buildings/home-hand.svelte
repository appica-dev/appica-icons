<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m18 9-6-6-9 9h2v7a2 2 0 0 0 2 2h3.5M9 21v-6a2 2 0 0 1 2-2h2m3 4.5-.585-.578a1.516 1.516 0 0 0-2 0c-.477.433-.551 1.112-.177 1.622L15 21c.37.506 1.331 1 2 1h3c1.009 0 1.497-.683 1.622-1.593Q22 19 22 18c0-1-.939-1.843-2-2h-1v-2.636C19 12.61 18.328 12 17.5 12s-1.5.61-1.5 1.364z\"/>";
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
