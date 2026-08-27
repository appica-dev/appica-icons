<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.929 2.25c1.278 0 2.505.514 3.409 1.428a4.9 4.9 0 0 1 1.412 3.447v13.65a.98.98 0 0 1-.51.859.96.96 0 0 1-.99-.049L12 18.046l-5.25 3.54a.96.96 0 0 1-1.319-.242 1 1 0 0 1-.175-.46l-.006-.11V7.124c0-1.292.508-2.532 1.412-3.446a4.8 4.8 0 0 1 3.41-1.428z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
