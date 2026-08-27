<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m21.75 3.616-6.235 17.262a1.498 1.498 0 0 1-2.71.028l-2.782-5.564zM20.384 2.25 8.656 13.976 3.122 11.21a1.5 1.5 0 0 1-.872-1.36c0-.586.341-1.119.948-1.392z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
